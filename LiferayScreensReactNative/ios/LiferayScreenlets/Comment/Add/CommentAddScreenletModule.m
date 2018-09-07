//
//  CommentAddScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 16/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(CommentAddScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onCommentAdded, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onAddCommentError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCommentUpdated, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUpdateCommentError, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
