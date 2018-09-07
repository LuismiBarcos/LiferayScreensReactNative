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

#import "LRBaseService.h"

/**
 * @author Bruno Farache
 */
@interface LRWebsiteService_v62 : LRBaseService

- (NSDictionary *)addWebsiteWithClassName:(NSString *)className classPK:(long long)classPK url:(NSString *)url typeId:(int)typeId primary:(BOOL)primary error:(NSError **)error;
- (NSDictionary *)addWebsiteWithClassName:(NSString *)className classPK:(long long)classPK url:(NSString *)url typeId:(int)typeId primary:(BOOL)primary serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (void)deleteWebsiteWithWebsiteId:(long long)websiteId error:(NSError **)error;
- (NSDictionary *)getWebsiteWithWebsiteId:(long long)websiteId error:(NSError **)error;
- (NSArray *)getWebsitesWithClassName:(NSString *)className classPK:(long long)classPK error:(NSError **)error;
- (NSDictionary *)updateWebsiteWithWebsiteId:(long long)websiteId url:(NSString *)url typeId:(int)typeId primary:(BOOL)primary error:(NSError **)error;

@end