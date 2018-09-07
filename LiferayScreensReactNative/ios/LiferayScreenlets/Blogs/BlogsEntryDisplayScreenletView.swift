//
//  BlogsEntryDisplayScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class BlogsEntryDisplayScreenletView: RCTView, BlogsEntryDisplayScreenletDelegate {
  // Variables
  var screenlet: BlogsEntryDisplayScreenlet!
  
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
  var onBlogEntryResponse: RCTBubblingEventBlock?
  var onBlogEntryError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = BlogsEntryDisplayScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let assetEntryId = screenletConfiguration["assetEntryId"]! as! NSNumber
//    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    self.screenlet.assetEntryId = assetEntryId.int64Value
    self.screenlet.classPK = classPK.int64Value
    self.screenlet.autoLoad = autoLoad
  }
  
  // MARK: BlogsEntryDisplayScreenletDelegate methods
  
  func screenlet(_ screenlet: BlogsEntryDisplayScreenlet, onBlogEntryResponse blogEntry: BlogsEntry) {
    let event = self.createEvent(attributeName: "blogEntry", attribute: blogEntry.attributes)
    self.onBlogEntryResponse?(event)
  }
  
  func screenlet(_ screenlet: BlogsEntryDisplayScreenlet, onBlogEntryError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onBlogEntryError?(event)
  }
}
