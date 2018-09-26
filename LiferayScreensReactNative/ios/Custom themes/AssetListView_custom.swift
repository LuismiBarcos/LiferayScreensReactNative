//
//  AssetListView_custom.swift
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 26/09/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import LiferayScreens

class AssetListView_custom: AssetListView_default {
  override open func doFillLoadedCell(row: Int, cell: UITableViewCell, object: AnyObject) {
    if let entry = object as? Asset {
      cell.textLabel?.text = entry.title.isEmpty ? "Empty title" : entry.title
      cell.accessoryType = .disclosureIndicator
      cell.accessoryView = nil
      cell.backgroundColor = UIColor.green
    }
  }
}
