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

#import "LRJournalFolderService_v62.h"

/**
 * @author Bruno Farache
 */
@implementation LRJournalFolderService_v62

- (NSDictionary *)addFolderWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId name:(NSString *)name description:(NSString *)description serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId),
		@"name": [self checkNull: name],
		@"description": [self checkNull: description],
	}];

	[self mangleWrapperWithParams:_params name:@"serviceContext" className:@"com.liferay.portal.service.ServiceContext" wrapper:serviceContext];

	NSDictionary *_command = @{@"/journalfolder/add-folder": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)deleteFolderWithFolderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/delete-folder": _params};

	[self.session invoke:_command error:error];
}

- (void)deleteFolderWithFolderId:(long long)folderId includeTrashedEntries:(BOOL)includeTrashedEntries error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId),
		@"includeTrashedEntries": @(includeTrashedEntries)
	}];

	NSDictionary *_command = @{@"/journalfolder/delete-folder": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)getFolderWithFolderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folder": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSArray *)getFolderIdsWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folder-ids": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersWithGroupId:(long long)groupId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId status:(int)status error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId),
		@"status": @(status)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId start:(int)start end:(int)end error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId),
		@"start": @(start),
		@"end": @(end)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId status:(int)status start:(int)start end:(int)end error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId),
		@"status": @(status),
		@"start": @(start),
		@"end": @(end)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersAndArticlesWithGroupId:(long long)groupId folderId:(long long)folderId start:(int)start end:(int)end obc:(LRJSONObjectWrapper *)obc error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"start": @(start),
		@"end": @(end),
	}];

	[self mangleWrapperWithParams:_params name:@"obc" className:@"com.liferay.portal.kernel.util.OrderByComparator" wrapper:obc];

	NSDictionary *_command = @{@"/journalfolder/get-folders-and-articles": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSArray *)getFoldersAndArticlesWithGroupId:(long long)groupId folderId:(long long)folderId status:(int)status start:(int)start end:(int)end obc:(LRJSONObjectWrapper *)obc error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"status": @(status),
		@"start": @(start),
		@"end": @(end),
	}];

	[self mangleWrapperWithParams:_params name:@"obc" className:@"com.liferay.portal.kernel.util.OrderByComparator" wrapper:obc];

	NSDictionary *_command = @{@"/journalfolder/get-folders-and-articles": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSNumber *)getFoldersAndArticlesCountWithGroupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders-and-articles-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getFoldersAndArticlesCountWithGroupId:(long long)groupId folderId:(long long)folderId status:(int)status error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"status": @(status)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders-and-articles-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getFoldersAndArticlesCountWithGroupId:(long long)groupId folderIds:(NSArray *)folderIds status:(int)status error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderIds": [self checkNull: folderIds],
		@"status": @(status)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders-and-articles-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getFoldersCountWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (NSNumber *)getFoldersCountWithGroupId:(long long)groupId parentFolderId:(long long)parentFolderId status:(int)status error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"parentFolderId": @(parentFolderId),
		@"status": @(status)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-folders-count": _params};

	return (NSNumber *)[self.session invoke:_command error:error];
}

- (void)getSubfolderIdsWithFolderIds:(NSArray *)folderIds groupId:(long long)groupId folderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderIds": [self checkNull: folderIds],
		@"groupId": @(groupId),
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-subfolder-ids": _params};

	[self.session invoke:_command error:error];
}

- (NSArray *)getSubfolderIdsWithGroupId:(long long)groupId folderId:(long long)folderId recurse:(BOOL)recurse error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"groupId": @(groupId),
		@"folderId": @(folderId),
		@"recurse": @(recurse)
	}];

	NSDictionary *_command = @{@"/journalfolder/get-subfolder-ids": _params};

	return (NSArray *)[self.session invoke:_command error:error];
}

- (NSDictionary *)moveFolderWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId),
		@"parentFolderId": @(parentFolderId),
	}];

	[self mangleWrapperWithParams:_params name:@"serviceContext" className:@"com.liferay.portal.service.ServiceContext" wrapper:serviceContext];

	NSDictionary *_command = @{@"/journalfolder/move-folder": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)moveFolderFromTrashWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId),
		@"parentFolderId": @(parentFolderId),
	}];

	[self mangleWrapperWithParams:_params name:@"serviceContext" className:@"com.liferay.portal.service.ServiceContext" wrapper:serviceContext];

	NSDictionary *_command = @{@"/journalfolder/move-folder-from-trash": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (NSDictionary *)moveFolderToTrashWithFolderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/move-folder-to-trash": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

- (void)restoreFolderFromTrashWithFolderId:(long long)folderId error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId)
	}];

	NSDictionary *_command = @{@"/journalfolder/restore-folder-from-trash": _params};

	[self.session invoke:_command error:error];
}

- (NSDictionary *)updateFolderWithFolderId:(long long)folderId parentFolderId:(long long)parentFolderId name:(NSString *)name description:(NSString *)description mergeWithParentFolder:(BOOL)mergeWithParentFolder serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error {
	NSMutableDictionary *_params = [NSMutableDictionary dictionaryWithDictionary:@{
		@"folderId": @(folderId),
		@"parentFolderId": @(parentFolderId),
		@"name": [self checkNull: name],
		@"description": [self checkNull: description],
		@"mergeWithParentFolder": @(mergeWithParentFolder),
	}];

	[self mangleWrapperWithParams:_params name:@"serviceContext" className:@"com.liferay.portal.service.ServiceContext" wrapper:serviceContext];

	NSDictionary *_command = @{@"/journalfolder/update-folder": _params};

	return (NSDictionary *)[self.session invoke:_command error:error];
}

@end