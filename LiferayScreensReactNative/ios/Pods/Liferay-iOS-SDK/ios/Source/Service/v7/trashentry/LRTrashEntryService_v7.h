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
@interface LRTrashEntryService_v7 : LRBaseService

- (NSArray *)getEntriesWithGroupId:(long long)groupId className:(NSString *)className error:(NSError **)error;
- (NSDictionary *)getEntriesWithGroupId:(long long)groupId error:(NSError **)error;
- (NSDictionary *)getEntriesWithGroupId:(long long)groupId start:(int)start end:(int)end obc:(LRJSONObjectWrapper *)obc error:(NSError **)error;
- (void)moveEntryWithClassName:(NSString *)className classPK:(long long)classPK destinationContainerModelId:(long long)destinationContainerModelId serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)deleteEntriesWithEntryIds:(NSArray *)entryIds error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)deleteEntriesWithGroupId:(long long)groupId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSDictionary *)restoreEntryWithEntryId:(long long)entryId error:(NSError **)error;
- (NSDictionary *)restoreEntryWithEntryId:(long long)entryId overrideClassPK:(long long)overrideClassPK name:(NSString *)name error:(NSError **)error;
- (NSDictionary *)restoreEntryWithClassName:(NSString *)className classPK:(long long)classPK overrideClassPK:(long long)overrideClassPK name:(NSString *)name error:(NSError **)error;
- (NSDictionary *)restoreEntryWithClassName:(NSString *)className classPK:(long long)classPK error:(NSError **)error;
- (void)deleteEntryWithClassName:(NSString *)className classPK:(long long)classPK error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)deleteEntryWithEntryId:(long long)entryId error:(NSError **)error CONVERT_ERROR_TO_THROWS;

@end