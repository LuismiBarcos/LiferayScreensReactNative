//
//  AssetDisplayScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(AssetDisplayScreenletManager)
class AssetDisplayScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return AssetDisplayScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
