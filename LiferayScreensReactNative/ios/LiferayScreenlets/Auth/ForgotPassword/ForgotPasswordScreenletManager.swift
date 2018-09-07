//
//  ForgotPasswordScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(ForgotPasswordScreenletManager)
class ForgotPasswordScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return ForgotPasswordScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}


