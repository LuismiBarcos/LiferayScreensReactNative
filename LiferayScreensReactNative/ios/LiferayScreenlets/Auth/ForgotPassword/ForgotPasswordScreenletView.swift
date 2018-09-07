//
//  ForgotPasswordScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class ForgotPasswordScreenletView: RCTView, ForgotPasswordScreenletDelegate{
  // Variables
  var screenlet: ForgotPasswordScreenlet!
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
  var onForgotPasswordSent: RCTBubblingEventBlock?
  var onForgotPasswordError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = ForgotPasswordScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let anonymousApiUserName = screenletConfiguration["anonymousApiUserName"]! as! String
    let anonymousApiPassword = screenletConfiguration["anonymousApiPassword"]! as! String
    self.screenlet.anonymousApiUserName = anonymousApiUserName
    self.screenlet.anonymousApiPassword = anonymousApiPassword
  }
  
  // MARK: ForgotPasswordScreenletDelegate methods
  
  func screenlet(_ screenlet: ForgotPasswordScreenlet, onForgotPasswordSent passwordSent: Bool) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "passwordSent": passwordSent
    ]
    self.onForgotPasswordSent?(event)
  }

  func screenlet(_ screenlet: ForgotPasswordScreenlet, onForgotPasswordError error: NSError) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "error": error.description
    ]
    self.onForgotPasswordError?(event)
  }
}
