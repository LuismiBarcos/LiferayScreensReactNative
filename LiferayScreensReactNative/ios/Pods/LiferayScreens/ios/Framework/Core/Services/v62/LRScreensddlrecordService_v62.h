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
@interface LRScreensddlrecordService_v62 : LRBaseService

- (NSDictionary *)getDdlRecordWithDdlRecordId:(long long)ddlRecordId locale:(NSString *)locale error:(NSError **)error;
- (NSArray *)getDdlRecordsWithDdlRecordSetId:(long long)ddlRecordSetId locale:(NSString *)locale start:(int)start end:(int)end obc:(LRJSONObjectWrapper *)obc error:(NSError **)error;
- (NSArray *)getDdlRecordsWithDdlRecordSetId:(long long)ddlRecordSetId userId:(long long)userId locale:(NSString *)locale start:(int)start end:(int)end obc:(LRJSONObjectWrapper *)obc error:(NSError **)error;
- (NSNumber *)getDdlRecordsCountWithDdlRecordSetId:(long long)ddlRecordSetId error:(NSError **)error;
- (NSNumber *)getDdlRecordsCountWithDdlRecordSetId:(long long)ddlRecordSetId userId:(long long)userId error:(NSError **)error;

@end
