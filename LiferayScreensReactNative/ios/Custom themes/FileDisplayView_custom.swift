//
//  FileDisplayView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 28/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class FileDisplayView_custom: FileDisplayView_default {
  override func onShow() {
    super.onShow()
    self.webView?.backgroundColor = UIColor.green
  }
}
