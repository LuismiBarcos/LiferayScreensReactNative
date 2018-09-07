//
//  CommentListScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 08/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(CommentListScreenletManager)
class CommentListScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return CommentListScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

