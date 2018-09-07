//
//  FileDisplayScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(FileDisplayScreenletManager)
class FileDisplayScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return FileDisplayScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
