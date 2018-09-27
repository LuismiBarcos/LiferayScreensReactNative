//
//  CommentAddView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class CommentAddView_custom: CommentAddView_default {
  override func updateButton() {
    sendCommentButton?.isEnabled = !(addCommentTextField?.text?.isEmpty ?? false)
    
    if let sendCommentButton = sendCommentButton {
      sendCommentButton.backgroundColor = UIColor.green
    }
  }
}
