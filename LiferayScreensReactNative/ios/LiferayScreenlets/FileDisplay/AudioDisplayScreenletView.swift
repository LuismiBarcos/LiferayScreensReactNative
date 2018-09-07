//
//  AudioDisplayScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 16/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class AudioDisplayScreenletView: RCTView, FileDisplayScreenletDelegate {
  // Variables
  var screenlet: AudioDisplayScreenlet!
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
    self.screenlet = AudioDisplayScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let assetEntryId = screenletConfiguration["assetEntryId"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    self.screenlet.assetEntryId = assetEntryId.int64Value
    self.screenlet.autoLoad = autoLoad
    self.screenlet.className = className
    self.screenlet.classPK = classPK.int64Value
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
