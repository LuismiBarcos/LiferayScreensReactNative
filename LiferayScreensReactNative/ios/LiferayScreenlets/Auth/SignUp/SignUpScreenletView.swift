//
//  SignUpScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 09/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class SignUpScreenletView: RCTView, SignUpScreenletDelegate {
  // Variables
  var screenlet: SignUpScreenlet!
  
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
  
  // MARK: events
  var onSignUpResponseUserAttributes: RCTBubblingEventBlock?
  var onSignUpError: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = SignUpScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let anonymousApiUserName = screenletConfiguration["anonymousApiUserName"]! as! String
    let anonymousApiPassword = screenletConfiguration["anonymousApiPassword"]! as! String
    let companyId = screenletConfiguration["companyId"]! as! NSNumber
    let autoLogin = screenletConfiguration["autoLogin"]! as! Bool
    let saveCredentials = screenletConfiguration["saveCredentials"]! as! Bool
    self.screenlet.anonymousApiUserName = anonymousApiUserName
    self.screenlet.anonymousApiPassword = anonymousApiPassword
    self.screenlet.companyId = companyId.int64Value
    self.screenlet.autoLogin = autoLogin
    self.screenlet.saveCredentials = saveCredentials
  }
  
  // MARK: SignUpScreenletDelegate methods

  func screenlet(_ screenlet: SignUpScreenlet, onSignUpResponseUserAttributes attributes: [String: AnyObject]) {
    let event = self.createEvent(attributeName: "user", attribute: attributes)
    self.onSignUpResponseUserAttributes?(event)
  }
  
  func screenlet(_ screenlet: SignUpScreenlet, onSignUpError error: NSError){
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onSignUpError?(event)
  }
}
