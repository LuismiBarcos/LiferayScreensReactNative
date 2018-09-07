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
@interface LRRepositoryService_v7 : LRBaseService

- (NSDictionary *)getTypeSettingsPropertiesWithRepositoryId:(long long)repositoryId error:(NSError **)error;
- (NSDictionary *)getRepositoryWithRepositoryId:(long long)repositoryId error:(NSError **)error;
- (NSDictionary *)addRepositoryWithGroupId:(long long)groupId classNameId:(long long)classNameId parentFolderId:(long long)parentFolderId name:(NSString *)name description:(NSString *)description portletId:(NSString *)portletId typeSettingsProperties:(NSDictionary *)typeSettingsProperties serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (NSArray *)getSupportedConfigurationsWithClassNameId:(long long)classNameId error:(NSError **)error;
- (void)updateRepositoryWithRepositoryId:(long long)repositoryId name:(NSString *)name description:(NSString *)description error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)checkRepositoryWithRepositoryId:(long long)repositoryId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (void)deleteRepositoryWithRepositoryId:(long long)repositoryId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSArray *)getSupportedParametersWithClassNameId:(long long)classNameId configuration:(NSString *)configuration error:(NSError **)error;
- (NSArray *)getSupportedParametersWithClassName:(NSString *)className configuration:(NSString *)configuration error:(NSError **)error;

@end