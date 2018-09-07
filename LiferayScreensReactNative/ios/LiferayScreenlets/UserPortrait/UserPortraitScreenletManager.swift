//
//  UserPortraitManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(UserPortraitScreenletManager)
class UserPortraitScreenletManager: RCTViewManager {
  
  override func view() -> UIView! {
    return UserPortraitScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
