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
@interface LRScreensjournalarticleService_v62 : LRBaseService

- (NSString *)getJournalArticleContentWithClassPK:(long long)classPK locale:(NSString *)locale error:(NSError **)error;
- (NSString *)getJournalArticleContentWithClassPK:(long long)classPK ddmTemplateId:(long long)ddmTemplateId locale:(NSString *)locale error:(NSError **)error;
- (NSString *)getJournalArticleContentWithGroupId:(long long)groupId articleId:(NSString *)articleId ddmTemplateId:(long long)ddmTemplateId locale:(NSString *)locale error:(NSError **)error;

@end
