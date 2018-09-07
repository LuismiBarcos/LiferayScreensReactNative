//
//  SignUpScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 09/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(SignUpScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onSignUpResponseUserAttributes, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onSignUpError, RCTBubblingEventBlock)

// Attributes
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
