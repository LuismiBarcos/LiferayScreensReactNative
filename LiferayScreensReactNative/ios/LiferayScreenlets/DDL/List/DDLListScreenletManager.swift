//
//  DDLListScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(DDLListScreenletManager)
class DDLListScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return DDLListScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
