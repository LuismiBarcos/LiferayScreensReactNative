//
//  WebContentDisplayScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 14/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class WebContentDisplayScreenletView: RCTView, WebContentDisplayScreenletDelegate {
  // Variables
  var screenlet: WebContentDisplayScreenlet!
  var _screenletAttributes: NSDictionary = NSDictionary()
  var screenletAttributes: NSDictionary {
    get {
      return _screenletAttributes
    }
    set{
      _screenletAttributes = newValue
      self.setConfiguration(_screenletAttributes)
    }
  }
  
  // MARK: Events
  var onWebContentResponse: RCTBubblingEventBlock?
  var onRecordContentResponse: RCTBubblingEventBlock?
  var onWebContentError: RCTBubblingEventBlock?
  var onUrlClicked: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = WebContentDisplayScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let groupId = screenletConfiguration["groupId"]! as! NSNumber
    let articleId = screenletConfiguration["articleId"]! as! String
    let templateId = screenletConfiguration["templateId"]! as! NSNumber
    let structureId = screenletConfiguration["structureId"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    self.screenlet.groupId = groupId.int64Value
    self.screenlet.articleId = articleId
    self.screenlet.templateId = templateId.int64Value
    self.screenlet.structureId = structureId.int64Value
    self.screenlet.autoLoad = autoLoad
  }
  
  // MARK: WebContentDisplayScreenletDelegate methods
  
  func screenlet(_ screenlet: WebContentDisplayScreenlet, onWebContentResponse html: String) -> String? {
    let event = self.createEvent(attributeName: "html", attribute: html)
    self.onWebContentResponse?(event)
    return html
  }
  
  func screenlet(_ screenlet: WebContentDisplayScreenlet, onRecordContentResponse record: DDLRecord) {
    let event = self.createEvent(attributeName: "record", attribute: record.attributes)
    self.onRecordContentResponse?(event)
  }
  
  func screenlet(_ screenlet: WebContentDisplayScreenlet, onWebContentError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onWebContentError?(event)
  }
  
  func screenlet(_ screenlet: WebContentDisplayScreenlet, onUrlClicked url: String) -> Bool {
    let event = self.createEvent(attributeName: "url", attribute: url)
    self.onUrlClicked?(event)
    return false
  }
}
