//
//  WebContentDisplayScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 14/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(WebContentDisplayScreenletManager)
class WebContentDisplayScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return WebContentDisplayScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
