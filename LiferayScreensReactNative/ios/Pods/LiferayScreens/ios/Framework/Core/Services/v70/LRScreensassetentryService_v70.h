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
@import LRMobileSDK;

/**
 * @author Bruno Farache
 */
@interface LRScreensassetentryService_v70 : LRBaseService

- (NSDictionary *)getAssetEntryWithClassName:(NSString *)className classPK:(long long)classPK locale:(NSString *)locale error:(NSError **)error;
- (NSDictionary *)getAssetEntryWithEntryId:(long long)entryId locale:(NSString *)locale error:(NSError **)error;
- (NSArray *)getAssetEntriesWithCompanyId:(long long)companyId groupId:(long long)groupId portletItemName:(NSString *)portletItemName locale:(NSString *)locale max:(int)max error:(NSError **)error;
- (NSArray *)getAssetEntriesWithAssetEntryQuery:(LRJSONObjectWrapper *)assetEntryQuery locale:(NSString *)locale error:(NSError **)error;

@end
