//
//  PdfDisplayScreenlet.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(PdfDisplayScreenletManager)
class PdfDisplayScreenletManager: RCTViewManager {
  override func view() -> UIView! {
    return PdfDisplayScreenletView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
