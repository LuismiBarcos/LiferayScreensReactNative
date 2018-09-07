//
//  DDLFormScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 13/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(DDLFormScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onFormLoaded, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onFormLoadError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onRecordLoaded, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onRecordLoadError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onFormSubmitted, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onFormSubmitError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDocumentFieldUploadStarted, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUploadProgress, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUploadFinished, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUploadError, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
