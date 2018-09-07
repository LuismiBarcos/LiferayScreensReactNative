//
//  AudioDisplayScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 16/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(AudioDisplayScreenletManager)
class AudioDisplayScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return AudioDisplayScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
