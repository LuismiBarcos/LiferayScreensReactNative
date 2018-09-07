//
//  FileDisplayScreenlet.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class FileDisplayScreenletView: RCTView, FileDisplayScreenletDelegate {
  // Variables
  var screenlet: FileDisplayScreenlet!
  
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
  var onFileAssetResponse: RCTBubblingEventBlock?
  var onFileAssetError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = FileDisplayScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let assetEntryId = screenletConfiguration["assetEntryId"]! as! NSNumber
    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    self.screenlet.assetEntryId = assetEntryId.int64Value
    self.screenlet.className = className
    self.screenlet.classPK = classPK.int64Value
    self.screenlet.autoLoad = autoLoad
  }
  
  // MARK: FileDisplayScreenletDelegate methods
  
  func screenlet(_ screenlet: FileDisplayScreenlet, onFileAssetResponse url: URL) {
    let event = self.createEvent(attributeName: "url", attribute: url.absoluteString)
    self.onFileAssetResponse?(event)
  }
  
  func screenlet(_ screenlet: FileDisplayScreenlet, onFileAssetError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onFileAssetError?(event)
  }
}
