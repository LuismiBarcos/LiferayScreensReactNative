//
//  UserPortraitView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 26/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class UserPortraitView_custom: UserPortraitView_default {
  override func onShow() {
    super.onShow()
    
    self.portraitImage?.layer.cornerRadius = self.portraitImage!.frame.size.width / 2
    self.portraitImage?.clipsToBounds = true
    self.borderWidth = 8.0
    self.editButton?.layer.cornerRadius = self.editButton!.frame.size.width / 2
    
    self.screenlet?.backgroundColor = .clear
  }
}
