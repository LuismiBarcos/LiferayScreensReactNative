//
//  LoginScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class LoginScreenletView: RCTView, LoginScreenletDelegate {
  // Variables
  var screenlet: LoginScreenlet!
  private var saveCredentials: Bool = false
  var SaveCredentials : Bool {
    get {
      return saveCredentials
    }
    set {
      saveCredentials = newValue
      screenlet.saveCredentials = saveCredentials
    }
  }
  private var theme: String = "default"
  var Theme: String {
    get {
      return theme
    }
    set {
      theme = newValue
      screenlet.themeName = theme
    }
  }
  
  // Events
  var onLoginSuccess: RCTBubblingEventBlock?
  var onLoginError: RCTBubblingEventBlock?
  var onCredentialsSavedUserAttributes: RCTBubblingEventBlock?
  var onCredentialsLoadedUserAttributes: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = LoginScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.addSubview(self.screenlet)
    
    self.screenlet.translatesAutoresizingMaskIntoConstraints = false
    
    self.screenlet.topAnchor.constraint(equalTo: self.topAnchor).isActive = true
    self.screenlet.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
    self.screenlet.rightAnchor.constraint(equalTo: self.rightAnchor).isActive = true
    self.screenlet.leftAnchor.constraint(equalTo: self.leftAnchor).isActive = true
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  // MARK: LoginScreenletDelegate methods
  
  func screenlet(_ screenlet: BaseScreenlet, onLoginResponseUserAttributes attributes: [String : AnyObject]) {
    self.onLoginSuccess?(attributes)
  }
  
  func screenlet(_ screenlet: BaseScreenlet, onLoginError error: NSError) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "error": error.description
    ]
    self.onLoginError?(event)
  }
  
  func screenlet(_ screenlet: BaseScreenlet, onCredentialsSavedUserAttributes attributes: [String : AnyObject]) {
    self.onCredentialsSavedUserAttributes?(attributes)
  }
  
  func screenlet(_ screenlet: LoginScreenlet, onCredentialsLoadedUserAttributes attributes: [String : AnyObject]) {
    self.onCredentialsLoadedUserAttributes?(attributes)
  }
}

