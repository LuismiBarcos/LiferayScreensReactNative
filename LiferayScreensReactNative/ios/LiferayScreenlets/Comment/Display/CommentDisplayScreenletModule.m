//
//  CommentDisplayScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 16/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(CommentDisplayScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onCommentLoaded, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onLoadCommentError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCommentDeleted, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDeleteComment, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCommentUpdated, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUpdateComment, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end
