//
//  AssetDisplayScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class AssetDisplayScreenletView: RCTView, AssetDisplayScreenletDelegate {
  // Variables
  var screenlet: AssetDisplayScreenlet!
  var _screenletAttributes: NSDictionary = NSDictionary()
  var screenletAttributes: NSDictionary {
    get {
      return _screenletAttributes
    }
    set{
      _screenletAttributes = newValue
      self.setConfiguration(_screenletAttributes)
    }
  }
  
  // MARK: Events
  var onAssetResponse: RCTBubblingEventBlock?
  var onAssetError: RCTBubblingEventBlock?
  var onConfigureScreenlet: RCTBubblingEventBlock?
  var onAsset: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = AssetDisplayScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let assetEntryId = screenletConfiguration["assetEntryId"]! as! NSNumber
    let className = screenletConfiguration["className"]! as! String
    let classPK = screenletConfiguration["classPK"]! as! NSNumber
    let portletItemName = screenletConfiguration["portletItemName"]! as! String
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.assetEntryId = assetEntryId.int64Value
    self.screenlet.className = className
    self.screenlet.classPK = classPK.int64Value
    self.screenlet.portletItemName = portletItemName
    self.screenlet.autoLoad = autoLoad
    self.screenlet.themeName = theme
  }
  
  // MARK: AssetDisplayScreenletDelegate methods
  
  func screenlet(_ screenlet: AssetDisplayScreenlet, onAssetResponse asset: Asset) {
    let event = self.createEvent(attributeName: "asset", attribute: asset.attributes)
    self.onAssetResponse?(event)
  }
  
  func screenlet(_ screenlet: AssetDisplayScreenlet, onAssetError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onAssetError?(event)
  }
  
  func screenlet(_ screenlet: AssetDisplayScreenlet,
                                onConfigureScreenlet childScreenlet: BaseScreenlet?,
                                onAsset asset: Asset) {
    let event: [String: Any] = [
      "target": self.reactTag,
      "childScreenlet": childScreenlet.debugDescription,
      "asset": asset.attributes
    ]
    self.onConfigureScreenlet?(event)
  }
  
  func screenlet(_ screenlet: AssetDisplayScreenlet, onAsset asset: Asset) -> UIView? {
    let event = self.createEvent(attributeName: "asset", attribute: asset.attributes)
    self.onAsset?(event)
    return nil
  }
}
