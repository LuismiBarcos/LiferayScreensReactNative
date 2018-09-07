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

#if defined(LIFERAY_MOBILE_SDK_FRAMEWORK) && defined(LIFERAY_MOBILE_SDK_APP)
    @import LRMobileSDK;
#else
    #import "LRBaseService.h"
#endif

/**
 * @author Bruno Farache
 */
@interface LRMicroblogsentryService_v71 : LRBaseService

- (NSDictionary *)addMicroblogsEntryWithUserId:(long long)userId content:(NSString *)content type:(int)type parentMicroblogsEntryId:(long long)parentMicroblogsEntryId socialRelationType:(int)socialRelationType serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (NSDictionary *)deleteMicroblogsEntryWithMicroblogsEntryId:(long long)microblogsEntryId error:(NSError **)error;
- (NSArray *)getMicroblogsEntriesWithStart:(int)start end:(int)end error:(NSError **)error;
- (NSArray *)getMicroblogsEntriesWithAssetTagName:(NSString *)assetTagName start:(int)start end:(int)end error:(NSError **)error;
- (NSDictionary *)getMicroblogsEntryWithMicroblogsEntryId:(long long)microblogsEntryId error:(NSError **)error;
- (NSNumber *)getMicroblogsEntriesCountWithAssetTagName:(NSString *)assetTagName error:(NSError **)error;
- (NSNumber *)getMicroblogsEntriesCount:(NSError **)error;
- (NSArray *)getUserMicroblogsEntriesWithMicroblogsEntryUserId:(long long)microblogsEntryUserId start:(int)start end:(int)end error:(NSError **)error;
- (NSArray *)getUserMicroblogsEntriesWithMicroblogsEntryUserId:(long long)microblogsEntryUserId type:(int)type start:(int)start end:(int)end error:(NSError **)error;
- (NSNumber *)getUserMicroblogsEntriesCountWithMicroblogsEntryUserId:(long long)microblogsEntryUserId error:(NSError **)error;
- (NSNumber *)getUserMicroblogsEntriesCountWithMicroblogsEntryUserId:(long long)microblogsEntryUserId type:(int)type error:(NSError **)error;
- (NSDictionary *)updateMicroblogsEntryWithMicroblogsEntryId:(long long)microblogsEntryId content:(NSString *)content socialRelationType:(int)socialRelationType serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;

@end