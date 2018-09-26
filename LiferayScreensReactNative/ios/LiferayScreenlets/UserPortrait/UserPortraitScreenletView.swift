//
//  UserPortraitView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class UserPortraitScreenletView: RCTView, UserPortraitScreenletDelegate {
  // Variables
  var screenlet: UserPortraitScreenlet!
  
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
  
  // Events
  var onUserPortraitLoaded: RCTBubblingEventBlock?
  var onUserPortraitError: RCTBubblingEventBlock?
  var onUserPortraitUploaded: RCTBubblingEventBlock?
  var onUserPortraitUploadError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = UserPortraitScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let userId = screenletConfiguration["userId"]! as! NSNumber
    let borderWidth = screenletConfiguration["borderWidth"]! as! NSNumber
    let editable = screenletConfiguration["editable"]! as! Bool
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.borderWidth = CGFloat(borderWidth)
    self.screenlet.editable = editable
    self.screenlet.presentingViewController = UIApplication.shared.delegate?.window??.rootViewController
    self.screenlet.load(userId: userId.int64Value)
    self.screenlet.themeName = theme
  }
  
  // MARK: UserPortraitScreenletDelegate methods
  
  func screenlet(_ screenlet: UserPortraitScreenlet, onUserPortraitResponseImage image: UIImage) -> UIImage {
    let event = self.createEvent(attributeName: "image", attribute: NSStringFromCGSize(image.size))
    self.onUserPortraitLoaded?(event)
    return image;
  }
  
  func screenlet(_ screenlet: UserPortraitScreenlet, onUserPortraitError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onUserPortraitError?(event)
  }
  
  func screenlet(_ screenlet: UserPortraitScreenlet, onUserPortraitUploaded attributes: [String: AnyObject]) {
    let event = self.createEvent(attributeName: "attributes", attribute: attributes)
    self.onUserPortraitUploaded?(event)
  }
  
  func screenlet(_ screenlet: UserPortraitScreenlet, onUserPortraitUploadError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onUserPortraitUploadError?(event)
  }
}
