//
//  CommentListScreenletModule.m
//  LiferayScreensReactNative
//
//  Created by Luis Miguel Barco on 08/08/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTView.h>

@interface RCT_EXTERN_MODULE(CommentListScreenletManager, RCTViewManager)

// Events
RCT_EXPORT_VIEW_PROPERTY(onListResponseComments, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCommentListError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onSelectedComment, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDeletedComment, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCommentDelete, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUpdatedComment, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCommentUpdate, RCTBubblingEventBlock)

// Properties
RCT_EXPORT_VIEW_PROPERTY(screenletAttributes, NSDictionary)

@end

