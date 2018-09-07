//
//  RCTViewExtension.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 24/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

extension RCTView {
  func updateViewConstraints(screenlet: BaseScreenlet) {
    self.addSubview(screenlet)
    screenlet.translatesAutoresizingMaskIntoConstraints = false
    screenlet.topAnchor.constraint(equalTo: self.topAnchor).isActive = true
    screenlet.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
    screenlet.rightAnchor.constraint(equalTo: self.rightAnchor).isActive = true
    screenlet.leftAnchor.constraint(equalTo: self.leftAnchor).isActive = true
  }
  
  func createEvent(attributeName: String, attribute: Any) -> [String: Any] {
    return [
      "target": self.reactTag,
      attributeName: attribute
    ]
  }
}
