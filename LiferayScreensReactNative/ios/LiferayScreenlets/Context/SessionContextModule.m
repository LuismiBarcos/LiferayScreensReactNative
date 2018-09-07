//
//  SessionContextModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 30/07/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>

@interface RCT_EXTERN_MODULE(SessionContextManager, RCTBridge)

RCT_EXTERN_METHOD(loadCredentials: (RCTPromiseResolveBlock)resolver rejecter: (RCTPromiseRejectBlock)rejecter)

@end
