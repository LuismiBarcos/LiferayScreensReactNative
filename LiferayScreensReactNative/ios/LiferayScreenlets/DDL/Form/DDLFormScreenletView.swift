//
//  DDLFormScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class DDLFormScreenletView: RCTView, DDLFormScreenletDelegate {
  // Variables
  var screenlet: DDLFormScreenlet!
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
  var onFormLoaded: RCTBubblingEventBlock?
  var onFormLoadError: RCTBubblingEventBlock?
  var onRecordLoaded: RCTBubblingEventBlock?
  var onRecordLoadError: RCTBubblingEventBlock?
  var onFormSubmitted: RCTBubblingEventBlock?
  var onFormSubmitError: RCTBubblingEventBlock?
  var onDocumentFieldUploadStarted: RCTBubblingEventBlock?
  var onUploadProgress: RCTBubblingEventBlock?
  var onUploadFinished: RCTBubblingEventBlock?
  var onUploadError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = DDLFormScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let structureId = screenletConfiguration["structureId"]! as! NSNumber
    let groupId = screenletConfiguration["groupId"]! as! NSNumber
    let recordSetId = screenletConfiguration["recordSetId"]! as! NSNumber
    let recordId = screenletConfiguration["recordId"]! as! NSNumber
    let repositoryId = screenletConfiguration["repositoryId"]! as! NSNumber
    let folderId = screenletConfiguration["folderId"]! as! NSNumber
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let autoscrollOnValidation = screenletConfiguration["autoscrollOnValidation"]! as! Bool
    let showSubmitButton = screenletConfiguration["showSubmitButton"]! as! Bool
    let editable = screenletConfiguration["editable"]! as! Bool
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.structureId = structureId.int64Value
    self.screenlet.groupId = groupId.int64Value
    self.screenlet.recordSetId = recordSetId.int64Value
    self.screenlet.recordId = recordId.int64Value
    self.screenlet.repositoryId = repositoryId.int64Value
    self.screenlet.folderId = folderId.int64Value
    self.screenlet.autoLoad = autoLoad
    self.screenlet.autoscrollOnValidation = autoscrollOnValidation
    self.screenlet.showSubmitButton = showSubmitButton
    self.screenlet.editable = editable
    self.screenlet.themeName = theme
  }
  
  // MARK: DDLFormScreenletDelegate methods
  
  func screenlet(_ screenlet: DDLFormScreenlet, onFormLoaded record: DDLRecord) {
    let event = self.createEvent(attributeName: "record", attribute: record.attributes)
    self.onFormLoaded?(event)
  }
  
  func screenlet(_ screenlet: DDLFormScreenlet, onFormLoadError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onFormLoadError?(event)
  }

  func screenlet(_ screenlet: DDLFormScreenlet, onRecordLoaded record: DDLRecord) {
    let event = self.createEvent(attributeName: "record", attribute: record.attributes)
    self.onRecordLoaded?(event)
  }
  
  func screenlet(_ screenlet: DDLFormScreenlet, onRecordLoadError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onRecordLoadError?(event)
  }

  func screenlet(_ screenlet: DDLFormScreenlet, onFormSubmitted record: DDLRecord) {
    let event = self.createEvent(attributeName: "record", attribute: record.attributes)
    self.onFormSubmitted?(event)
  }

  func screenlet(_ screenlet: DDLFormScreenlet, onFormSubmitError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onFormSubmitError?(event)
  }
  
  func screenlet(_ screenlet: DDLFormScreenlet, onDocumentFieldUploadStarted field: DDMFieldDocument) {
    let event = self.createEvent(attributeName: "field", attribute: field)
    self.onDocumentFieldUploadStarted?(event)
  }

  func screenlet(_ screenlet: DDLFormScreenlet,
                                onDocumentField field: DDMFieldDocument,
                                uploadedBytes bytes: UInt64,
                                totalBytes total: UInt64) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "field": field,
      "bytes": bytes,
      "totalBytes": total
    ]
    self.onUploadProgress?(event)
  }
  
  func screenlet(_ screenlet: DDLFormScreenlet,
                                onDocumentField field: DDMFieldDocument,
                                uploadResult result: [String: Any]) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "field": field,
      "result": result
    ]
    self.onUploadFinished?(event)
  }
  
  func screenlet(_ screenlet: DDLFormScreenlet,
                                onDocumentField field: DDMFieldDocument,
                                uploadError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onUploadError?(event)
  }
}


