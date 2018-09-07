/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

#import "LRCallback.h"


NS_ASSUME_NONNULL_BEGIN
typedef void (^LRFailureBlock)(NSError *);
typedef void (^LRSuccessBlock)(id);

/**
 * @author Bruno Farache
 */
@interface LRBlockCallback : NSObject <LRCallback>

@property (nonatomic, copy) LRFailureBlock failure;
@property (nonatomic, copy) LRSuccessBlock success;

- (id)initWithSuccess:(LRSuccessBlock)success failure:(LRFailureBlock)failure;

@end

NS_ASSUME_NONNULL_END
