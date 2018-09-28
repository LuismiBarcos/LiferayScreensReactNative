//
//  AssetDisplayView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 28/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class AssetDisplayView_custom: AssetDisplayView_default {
  override var innerScreenlet: UIView? {
    didSet {
      self.innerScreenlet?.backgroundColor = UIColor.green
    }
  }
}
