//
//  DDLListScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class DDLListScreenletView: RCTView, DDLListScreenletDelegate {
  // Variables
  var screenlet: DDLListScreenlet!
  
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
  var onDDLListResponseRecords: RCTBubblingEventBlock?
  var onDDLListError: RCTBubblingEventBlock?
  var onDDLSelectedRecord: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = DDLListScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let recordSetId = screenletConfiguration["recordSetId"]! as! NSNumber
    let userId = screenletConfiguration["userId"]! as! NSNumber
    let labelFields = screenletConfiguration["labelFields"]! as! String
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let refreshControl = screenletConfiguration["refreshControl"]! as! Bool
    let firstPageSize = screenletConfiguration["firstPageSize"]! as! NSNumber
    let pageSize = screenletConfiguration["pageSize"]! as! NSNumber
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.recordSetId = recordSetId.int64Value
    self.screenlet.userId = userId.int64Value
    self.screenlet.labelFields = labelFields
    self.screenlet.autoLoad = autoLoad
    self.screenlet.refreshControl = refreshControl
    self.screenlet.firstPageSize = firstPageSize.intValue
    self.screenlet.pageSize = pageSize.intValue
    self.screenlet.themeName = theme
  }
  
  // MARK: DDLListScreenletDelegate methods
  
  func screenlet(_ screenlet: DDLListScreenlet, onDDLListResponseRecords records: [DDLRecord]) {
    let recordsAttributes = records.map {
      $0.attributes
    }
    let event = self.createEvent(attributeName: "records", attribute: recordsAttributes)
    self.onDDLListResponseRecords?(event)
  }
  
  func screenlet(_ screenlet: DDLListScreenlet, onDDLListError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onDDLListError?(event)
  }

  func screenlet(_ screenlet: DDLListScreenlet, onDDLSelectedRecord record: DDLRecord) {
    let event = self.createEvent(attributeName: "record", attribute: record.attributes)
    self.onDDLSelectedRecord?(event)
  }
}
