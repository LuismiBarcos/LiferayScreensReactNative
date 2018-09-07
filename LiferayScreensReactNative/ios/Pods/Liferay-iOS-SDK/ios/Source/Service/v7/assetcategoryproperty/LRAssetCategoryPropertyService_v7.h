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
@interface LRAssetCategoryPropertyService_v7 : LRBaseService

- (void)deleteCategoryPropertyWithCategoryPropertyId:(long long)categoryPropertyId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSArray *)getCategoryPropertiesWithEntryId:(long long)entryId error:(NSError **)error;
- (NSArray *)getCategoryPropertyValuesWithCompanyId:(long long)companyId key:(NSString *)key error:(NSError **)error;
- (NSDictionary *)addCategoryPropertyWithEntryId:(long long)entryId key:(NSString *)key value:(NSString *)value error:(NSError **)error;
- (NSDictionary *)updateCategoryPropertyWithCategoryPropertyId:(long long)categoryPropertyId key:(NSString *)key value:(NSString *)value error:(NSError **)error;
- (NSDictionary *)updateCategoryPropertyWithUserId:(long long)userId categoryPropertyId:(long long)categoryPropertyId key:(NSString *)key value:(NSString *)value error:(NSError **)error;

@end