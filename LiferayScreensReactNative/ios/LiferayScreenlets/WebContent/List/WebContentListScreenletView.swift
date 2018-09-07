//
//  WebContentListScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class WebContentListScreenletView: RCTView, WebContentListScreenletDelegate {
  // Variables
  var screenlet: WebContentListScreenlet!
  
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
  var onWebContentListResponse: RCTBubblingEventBlock?
  var onWebContentListError: RCTBubblingEventBlock?
  var onWebContentSelected: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = WebContentListScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let groupId = screenletConfiguration["groupId"]! as! NSNumber
    let folderId = screenletConfiguration["folderId"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let refreshControl = screenletConfiguration["refreshControl"]! as! Bool
    let firstPageSize = screenletConfiguration["firstPageSize"]! as! NSNumber
    let pageSize = screenletConfiguration["pageSize"]! as! NSNumber
    self.screenlet.groupId = groupId.int64Value
    self.screenlet.folderId = folderId.int64Value
    self.screenlet.autoLoad = autoLoad
    self.screenlet.refreshControl = refreshControl
    self.screenlet.firstPageSize = firstPageSize.intValue
    self.screenlet.pageSize = pageSize.intValue
  }
  
  // MARK: WebContentListScreenletDelegate methods
  
  func screenlet(_ screenlet: WebContentListScreenlet, onWebContentListResponse contents: [WebContent]) {
    let htmls = contents.map{
      $0.html
    }
    let event = self.createEvent(attributeName: "contents", attribute: htmls)
    self.onWebContentListResponse?(event)
  }
  
  func screenlet(_ screenlet: WebContentListScreenlet, onWebContentListError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onWebContentListError?(event)
  }
  
  func screenlet(_ screenlet: WebContentListScreenlet, onWebContentSelected content: WebContent) {
    let event = self.createEvent(attributeName: "content", attribute: content.html ?? "")
    self.onWebContentSelected?(event)
  }
}
