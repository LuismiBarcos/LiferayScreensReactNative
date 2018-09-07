//
//  WebContentListScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(WebContentListScreenletManager)
class WebContentListScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return WebContentListScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
