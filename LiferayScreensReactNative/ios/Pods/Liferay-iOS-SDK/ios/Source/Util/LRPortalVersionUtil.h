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

#import "LRSession.h"
#import "Macros.h"

extern const int LR_UNKNOWN_VERSION;
extern const int LR_VERSION_6_2;
extern const int LR_VERSION_7;
extern const int LR_VERSION_7_1;

/**
 * @author Bruno Farache
 * @author Josiane Bezerra
 */
NS_ASSUME_NONNULL_BEGIN
@interface LRPortalVersionUtil : NSObject

+ (int)getPortalVersion:(LRSession *)session error:(NSError * _Nullable * _Nullable)error
CONVERT_ERROR_TO_THROWS;

@end
NS_ASSUME_NONNULL_END
