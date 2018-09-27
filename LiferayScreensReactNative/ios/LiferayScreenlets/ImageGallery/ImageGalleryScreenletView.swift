//
//  ImageGalleryScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 30/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class ImageGalleryScreenletView: RCTView, ImageGalleryScreenletDelegate {
  // Variables
  var screenlet: ImageGalleryScreenlet!
  
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
  var onContentsReceived: RCTBubblingEventBlock?
  var onGalleryError: RCTBubblingEventBlock?
  var onItemSelected: RCTBubblingEventBlock?
  var onImageEntryDeleted: RCTBubblingEventBlock?
  var onImageEntryDeleteError: RCTBubblingEventBlock?
  var onImageUploadStart: RCTBubblingEventBlock?
  var onImageUploadProgress: RCTBubblingEventBlock?
  var onImageUploadError: RCTBubblingEventBlock?
  var onImageUploaded: RCTBubblingEventBlock?
  var onImageUploadDetailViewCreated: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = ImageGalleryScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let repositoryId = screenletConfiguration["repositoryId"]! as! NSNumber
    let folderId = screenletConfiguration["folderId"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let refreshControl = screenletConfiguration["refreshControl"]! as! Bool
    let firstPageSize = screenletConfiguration["firstPageSize"]! as! NSNumber
    let pageSize = screenletConfiguration["pageSize"]! as! NSNumber
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.repositoryId = repositoryId.int64Value
    self.screenlet.folderId = folderId.int64Value
    self.screenlet.autoLoad = autoLoad
    self.screenlet.refreshControl = refreshControl
    self.screenlet.firstPageSize = firstPageSize.intValue
    self.screenlet.pageSize = pageSize.intValue
    self.screenlet.themeName = theme
  }
  
  // MARK: ImageGalleryScreenletDelegate methods
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageEntriesResponse imageEntries: [ImageEntry]) {
    let imagesAttributes = imageEntries.map {
      $0.attributes
    }
    let event = self.createEvent(attributeName: "images", attribute: imagesAttributes)
    self.onContentsReceived?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageEntriesError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onGalleryError?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageEntrySelected imageEntry: ImageEntry) {
    let event = self.createEvent(attributeName: "image", attribute: imageEntry.attributes)
    self.onItemSelected?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageEntryDeleted imageEntry: ImageEntry) {
    let event = self.createEvent(attributeName: "image", attribute: imageEntry.attributes)
    self.onImageEntryDeleted?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageEntryDeleteError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onImageEntryDeleteError?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageUploadStart imageEntryUpload: ImageEntryUpload) {
    let event = self.createEvent(attributeName: "image", attribute: imageEntryUpload.title)
    self.onImageUploadStart?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet,
                                onImageUploadProgress imageEntryUpload: ImageEntryUpload,
                                totalBytesSent: UInt64,
                                totalBytesToSend: UInt64) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "totalBytesSent": totalBytesSent,
      "totalBytesToSend": totalBytesToSend
    ]
    self.onImageUploadProgress?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageUploadError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onImageUploadError?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageUploaded image: ImageEntry) {
    let event = self.createEvent(attributeName: "image", attribute: image.attributes)
    self.onImageUploaded?(event)
  }
  
  func screenlet(_ screenlet: ImageGalleryScreenlet, onImageUploadDetailViewCreated view: ImageUploadDetailViewBase) -> Bool {
    let event = self.createEvent(attributeName: "view", attribute: view.imageTitle ?? "")
    self.onImageUploadDetailViewCreated?(event)
    return true
  }
}
