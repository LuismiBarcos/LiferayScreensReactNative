//
//  AssetListScreenletView.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import LiferayScreens

class AssetListScreenletView: RCTView, AssetListScreenletDelegate {
  // Variables
  var screenlet: AssetListScreenlet!
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
  var onAssetListResponse: RCTBubblingEventBlock?
  var onAssetListError: RCTBubblingEventBlock?
  var onAssetSelected: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.screenlet = AssetListScreenlet(frame: frame, themeName: "default")
    self.screenlet.delegate = self
    self.updateViewConstraints(screenlet: self.screenlet)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func setConfiguration(_ screenletConfiguration: NSDictionary) {
    let groupId = screenletConfiguration["groupId"]! as! NSNumber
    let classNameId = screenletConfiguration["classNameId"]! as! NSNumber
    let portletItemName = screenletConfiguration["portletItemName"]! as! String
    let autoLoad = screenletConfiguration["autoLoad"]! as! Bool
    let refreshControl = screenletConfiguration["refreshControl"]! as! Bool
    let firstPageSize = screenletConfiguration["firstPageSize"]! as! NSNumber
    let pageSize = screenletConfiguration["pageSize"]! as! NSNumber
    let theme = screenletConfiguration["theme"]! as! String
    self.screenlet.groupId = groupId.int64Value
    self.screenlet.classNameId = classNameId.int64Value
    self.screenlet.portletItemName = portletItemName
    self.screenlet.autoLoad = autoLoad
    self.screenlet.refreshControl = refreshControl
    self.screenlet.firstPageSize = firstPageSize.intValue
    self.screenlet.pageSize = pageSize.intValue
    self.screenlet.themeName = theme
  }
  
  // MARK: AssetListScreenletDelegate methods
  
  func screenlet(_ screenlet: AssetListScreenlet, onAssetListResponse assets: [Asset]) {
    let assetsAttributes = assets.map{
      $0.attributes
    }
    let event = self.createEvent(attributeName: "assets", attribute: assetsAttributes)
    self.onAssetListResponse?(event)
  }
  
  func screenlet(_ screenlet: AssetListScreenlet, onAssetListError error: NSError) {
    let event = self.createEvent(attributeName: "error", attribute: error.description)
    self.onAssetListError?(event)
  }
  
  func screenlet(_ screenlet: AssetListScreenlet, onAssetSelected asset: Asset) {
    let event = self.createEvent(attributeName: "asset", attribute: asset.attributes)
    self.onAssetSelected?(event);
  }
}

