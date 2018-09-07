//
//  SignUpScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 09/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(SignUpScreenletManager)
class SignUpScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return SignUpScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
