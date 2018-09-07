//
//  BlogsEntryDisplayScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(BlogsEntryDisplayScreenletManager)
class BlogsEntryDisplayScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return BlogsEntryDisplayScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
