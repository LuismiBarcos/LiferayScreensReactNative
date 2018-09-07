//
//  LoginScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(LoginScreenletManager)
class LoginScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    let loginScreenlet = LoginScreenletView(frame: .zero)
    return loginScreenlet
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
