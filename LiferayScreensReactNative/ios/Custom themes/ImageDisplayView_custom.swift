//
//  ImageDisplayView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class ImageDisplayView_custom: ImageDisplayView_default {
  override func onStartInteraction() {
    super.onStartInteraction()
    
    self.imageView?.layer.borderWidth = 5.0
    self.imageView?.layer.borderColor = UIColor.blue.cgColor
  }
}
