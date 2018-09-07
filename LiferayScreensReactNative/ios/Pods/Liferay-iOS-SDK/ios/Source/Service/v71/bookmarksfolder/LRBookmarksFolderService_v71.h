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
@interface LRBookmarksFolderService_v71 : LRBaseService

- (NSArray *)getFolderIdsWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error;
- (NSDictionary *)moveFolderWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId error:(NSError **)error;
- (void)subscribeFolderWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)unsubscribeFolderWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSDictionary *)updateFolderWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId name:(NSString *)name description:(NSString *)description serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (NSDictionary *)updateFolderWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId name:(NSString *)name description:(NSString *)description mergeWithParentFolder:(BOOL)mergeWithParentFolder serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (NSNumber *)getFoldersCountWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId error:(NSError **)error;
- (NSNumber *)getFoldersCountWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId status:(int)status error:(NSError **)error;
- (NSArray *)getSubfolderIdsWithGroupId:(long long)groupId folderId:(long long)folderId recurse:(BOOL)recurse error:(NSError **)error;
- (void)getSubfolderIdsWithFolderIds:(NSArray *)folderIds groupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)getSubfolderIdsWithFolderIds:(NSArray *)folderIds groupId:(long long)groupId folderId:(long long)folderId recurse:(BOOL)recurse error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSDictionary *)moveFolderFromTrashWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId error:(NSError **)error;
- (NSDictionary *)moveFolderToTrashWithFolderId:(long long)folderId error:(NSError **)error;
- (void)restoreFolderFromTrashWithFolderId:(long long)folderId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSArray *)getFoldersAndEntriesWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error;
- (NSArray *)getFoldersAndEntriesWithGroupId:(long long)groupId folderId:(long long)folderId status:(int)status error:(NSError **)error;
- (NSArray *)getFoldersAndEntriesWithGroupId:(long long)groupId folderId:(long long)folderId status:(int)status start:(int)start end:(int)end error:(NSError **)error;
- (NSNumber *)getFoldersAndEntriesCountWithGroupId:(long long)groupId folderId:(long long)folderId status:(int)status error:(NSError **)error;
- (NSNumber *)getFoldersAndEntriesCountWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error;
- (void)mergeFoldersWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSDictionary *)getFolderWithFolderId:(long long)folderId error:(NSError **)error;
- (NSArray *)getFoldersWithGroupId:(long long)groupId error:(NSError **)error;
- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId start:(int)start end:(int)end error:(NSError **)error;
- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId status:(int)status start:(int)start end:(int)end error:(NSError **)error;
- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId error:(NSError **)error;
- (NSDictionary *)addFolderWithParentFolderId:(long long)parentFolderId name:(NSString *)name description:(NSString *)description serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (void)deleteFolderWithFolderId:(long long)folderId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)deleteFolderWithFolderId:(long long)folderId includeTrashedEntries:(BOOL)includeTrashedEntries error:(NSError **)error CONVERT_ERROR_TO_THROWS;

@end