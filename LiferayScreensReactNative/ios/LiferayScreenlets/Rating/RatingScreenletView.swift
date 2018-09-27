//
//  RatingScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class RatingScreenletView: RCTView, RatingScreenletDelegate {
  // Variables
  var screenlet: RatingScreenlet!
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
  var onRatingRetrieve: RCTBubblingEventBlock?
  var onRatingDeleted: RCTBubblingEventBlock?
  var onRatingUpdated: RCTBubblingEventBlock?
  var onRatingError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = RatingScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
}
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let editable = screenletConfiguration["editable"]! as! Bool
    let entryId = screenletConfiguration["entryId"]! as! NSNumber
    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.autoLoad = autoLoad
    self.screenlet.editable = editable
    self.screenlet.entryId = entryId.int64Value
    self.screenlet.className = className
    self.screenlet.classPK = classPK.int64Value
    self.screenlet.themeName = theme
  }
  
  // MARK: RatingScreenletDelegate methods
  
  func screenlet(_ screenlet: RatingScreenlet, onRatingRetrieve rating: RatingEntry) {
    let event = self.createEvent(attributeName: "rating", attribute: rating.attributes)
    self.onRatingRetrieve?(event)
  }

  func screenlet(_ screenlet: RatingScreenlet, onRatingDeleted rating: RatingEntry) {
    let event = self.createEvent(attributeName: "rating", attribute: rating.attributes)
    self.onRatingDeleted?(event)
  }
  
  func screenlet(_ screenlet: RatingScreenlet, onRatingUpdated rating: RatingEntry) {
    let event = self.createEvent(attributeName: "rating", attribute: rating.attributes)
    self.onRatingUpdated?(event)
  }
  
  func screenlet(_ screenlet: RatingScreenlet, onRatingError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onRatingError?(event)
  }
}
