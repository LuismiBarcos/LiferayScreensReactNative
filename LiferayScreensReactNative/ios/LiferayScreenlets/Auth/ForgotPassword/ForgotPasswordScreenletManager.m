//
//  ForgotPasswordScreenletManager.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(ForgotPasswordScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onForgotPasswordSent, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onForgotPasswordError, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
