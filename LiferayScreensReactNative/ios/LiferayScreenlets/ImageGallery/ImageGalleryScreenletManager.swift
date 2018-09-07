//
//  ImageGalleryScreenletManager.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 30/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(ImageGalleryScreenletManager)
class ImageGalleryScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return ImageGalleryScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
