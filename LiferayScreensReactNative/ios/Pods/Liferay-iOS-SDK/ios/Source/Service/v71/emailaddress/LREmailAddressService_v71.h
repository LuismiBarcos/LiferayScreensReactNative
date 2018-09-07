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
@interface LREmailAddressService_v71 : LRBaseService

- (NSDictionary *)updateEmailAddressWithEmailAddressId:(long long)emailAddressId address:(NSString *)address typeId:(long long)typeId primary:(BOOL)primary error:(NSError **)error;
- (NSDictionary *)addEmailAddressWithClassName:(NSString *)className classPK:(long long)classPK address:(NSString *)address typeId:(long long)typeId primary:(BOOL)primary serviceContext:(LRJSONObjectWrapper *)serviceContext error:(NSError **)error;
- (void)deleteEmailAddressWithEmailAddressId:(long long)emailAddressId error:(NSError **)error CONVERT_ERROR_TO_THROWS;
- (NSDictionary *)fetchEmailAddressWithEmailAddressId:(long long)emailAddressId error:(NSError **)error;
- (NSArray *)getEmailAddressesWithClassName:(NSString *)className classPK:(long long)classPK error:(NSError **)error;
- (NSDictionary *)getEmailAddressWithEmailAddressId:(long long)emailAddressId error:(NSError **)error;

@end