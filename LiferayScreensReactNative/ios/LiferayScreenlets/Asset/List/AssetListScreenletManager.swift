//
//  AssetListScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(AssetListScreenletManager)
class AssetListScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return AssetListScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
