//
//  LoginScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 27/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(LoginScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onLoginSuccess, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onLoginError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCredentialsSavedUserAttributes, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCredentialsLoadedUserAttributes, RCTBubblingEventBlock)

// Attributes
RCT_EXPORT_VIEW_PROPERTY(saveCredentials, BOOL)
RCT_EXPORT_VIEW_PROPERTY(theme, NSString)

@end
