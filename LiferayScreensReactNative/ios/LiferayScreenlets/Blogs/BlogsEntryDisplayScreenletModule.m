//
//  BlogsEntryDisplayScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 21/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(BlogsEntryDisplayScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onBlogEntryResponse, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onBlogEntryError, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
