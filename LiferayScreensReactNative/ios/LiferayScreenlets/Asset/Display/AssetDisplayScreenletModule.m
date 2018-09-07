//
//  AssetDisplayScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 20/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(AssetDisplayScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onAssetResponse, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onAssetError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConfigureScreenlet, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onAsset, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
