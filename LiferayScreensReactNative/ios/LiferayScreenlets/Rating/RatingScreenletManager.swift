//
//  RatingScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(RatingScreenletManager)
class RatingScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return RatingScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
