//
//  VideoDisplayView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 28/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class VideoDisplayView_custom: VideoDisplayView_default {

  override func onShow() {
    super.onShow()
    self.screenlet?.layer.backgroundColor = UIColor.green.cgColor
  }
}
