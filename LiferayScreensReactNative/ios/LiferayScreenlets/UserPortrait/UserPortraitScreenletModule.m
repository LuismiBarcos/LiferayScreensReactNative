//
//  UserPortraitScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(UserPortraitScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onUserPortraitLoaded, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUserPortraitError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUserPortraitUploaded, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUserPortraitUploadError, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
