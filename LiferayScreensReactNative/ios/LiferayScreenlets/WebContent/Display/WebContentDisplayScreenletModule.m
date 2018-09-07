//
//  WebContentDisplayScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 14/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(WebContentDisplayScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onWebContentResponse, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onRecordContentResponse, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onWebContentError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUrlClicked, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end

