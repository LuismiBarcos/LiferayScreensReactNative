// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [Luis Miguel Barcos] <[https://github.com/LuismiBarcos]>

import React from 'react';
import BaseScreenlet from './Base/BaseScreenlet';

export class BaseScreenlet<T> extends React.Component<T>{}

export interface UserPortraitScreenletProps {
    //Attributes
    autoLoad: boolean;
    userId: number;
    male: boolean;
    portraitId: number;
    uuid: string;
    editable: boolean;
    borderWidth: number;
    // Common events
    onUserPortraitLoaded: (event: any) => void;
    onUserPortraitError: (event: any) => void;
    onUserPortraitUploaded: (event: any) => void;
    // iOS events
    onUserPortraitUploadError: (event: any) => void;
    // Android events
    onUserPortraitLoadReceived: (event: any) => void;
}
export class UserPortraitScreenlet extends BaseScreenlet<UserPortraitScreenletProps>{}

export interface LoginScreenletProps {
    // Attributes
    saveCredentials: boolean;
    theme: string;
    // Common Events
    onLoginSuccess: (event: any) => void;
    onLoginError: (event: any) => void;
    // iOS events
    onCredentialsSavedUserAttributes: (event: any) => void;
    onCredentialsLoadedUserAttributes: (event: any) => void;
    // Android events
    onLoginScreenletAuthenticationBrowserShown: (event: any) => void;
}
export class LoginScreenlet extends BaseScreenlet<LoginScreenletProps>{}

export interface SignUpScreenletProps {
    // Attributes
    anonymousApiUserName: string;
    anonymousApiPassword: string;
    companyId: number;
    autoLogin: boolean;
    saveCredentials: boolean;
    // Common Events
    onSignUpSuccess: (event: any) => void;
    onSignUpFailure: (event: any) => void;
}
export class SignUpScreenlet extends BaseScreenlet<SignUpScreenletProps>{}

export interface ForgotPasswordScreenletProps {
    // Attributes
    anonymousApiUserName: string;
    anonymousApiPassword: string;
    companyId: number;
    // iOS Events
    onForgotPasswordSent: (event: any) => void;
    onForgotPasswordError: (event: any) => void;
    // Android events
    onForgotPasswordRequestSuccess: (event: any) => void;
    onForgotPasswordRequestFailure: (event: any) => void;
}
export class ForgotPasswordScreenlet extends BaseScreenlet<ForgotPasswordScreenletProps> {}

export interface DDLFormScreenletProps {
    // Attributes
    structureId: number;
    groupId: number;
    recordSetId: number;
    recordId: number;
    repositoryId: number;
    folderId: number;
    autoLoad: boolean;
    autoscrollOnValidation: boolean;
    showSubmitButton: boolean;
    editable: boolean;
    // iOS Events
    onFormLoaded: (event: any) => void;
    onFormLoadError: (event: any) => void;
    onRecordLoaded: (event: any) => void;
    onRecordLoadError: (event: any) => void;
    onFormSubmitted: (event: any) => void;
    onFormSubmitError: (event: any) => void;
    onDocumentFieldUploadStarted: (event: any) => void;
    onUploadProgress: (event: any) => void;
    onUploadFinished: (event: any) => void;
    onUploadError: (event: any) => void;
    // Android events
    onDDLFormLoaded: (event: any) => void;
    onDDLFormRecordLoaded: (event: any) => void;
    onDDLFormRecordAdded: (event: any) => void;
    onDDLFormRecordUpdated: (event: any) => void;
    onDDLFormDocumentUploaded: (event: any) => void;
    onDDLFormDocumentUploadFailed: (event: any) => void;
    onError: (event: any) => void;
}
export class DDLFormScreenlet extends BaseScreenlet<DDLFormScreenletProps> {}

export interface DDLListScreenletProps {
    // Attributes
    autoLoad: boolean;
    recordSetId: number;
    userId: number;
    firstPageSize: number;
    pageSize: number;
    labelFields: string;
    refreshControl: boolean;
    // iOS Events
    onDDLListResponseRecords: (event: any) => void;
    onDDLListError: (event: any) => void;
    onDDLSelectedRecord: (event: any) => void;
    // Android Events
    onListPageFailed: (event: any) => void;
    onListPageReceived: (event: any) => void;
    onListItemSelected: (event: any) => void;
    onError: (event: any) => void;
}
export class DDLListScreenlet extends BaseScreenlet<DDLListScreenletProps> {}

export interface AssetListScreenletProps {
    // Attributes
    groupId: number;
    classNameId: number;
    portletItemName: string;
    autoLoad: boolean;
    refreshControl: boolean;
    firstPageSize: number;
    pageSize: number;
    // iOS Events
    onAssetListResponse: (event: any) => void;
    onAssetListError: (event: any) => void;
    onAssetSelected: (event: any) => void;
    // Android Events
    onListPageFailed: (event: any) => void;
    onListPageReceived: (event: any) => void;
    onListItemSelected: (event: any) => void;
    onError: (event: any) => void;
}
export class AssetListScreenlet extends BaseScreenlet<AssetListScreenletProps> {}

export interface WebContentDisplayScreenletProps {
    // Attributes
    groupId: number;
    articleId: string;
    templateId: number;
    structureId: number;
    autoLoad: boolean;
    // iOS Events
    onWebContentResponse: (event: any) => void;
    onRecordContentResponse: (event: any) => void;
    onWebContentError: (event: any) => void;
    // Android Events
    onWebContentReceived: (event: any) => void;
    onWebContentTouched: (event: any) => void;
    onError: (event: any) => void;
    // Common events
    onUrlClicked: (event: any) => void;
}
export class WebContentDisplayScreenlet extends BaseScreenlet<WebContentDisplayScreenletProps>{}

export interface WebContentListScreenletProps {
    autoLoad: boolean;
    folderId: number;
    groupId: number;
    labelFields: string;
    firstPageSize: number;
    pageSize: number;
    refreshControl: boolean;
    // iOS Events
    onWebContentListResponse: (event: any) => void;
    onWebContentListError: (event: any) => void;
    onWebContentSelected: (event: any) => void;
    // Android Events
    onListPageFailed: (event: any) => void;
    onListPageReceived: (event: any) => void;
    onListItemSelected: (event: any) => void;
    onError: (event: any) => void;
}
export class WebContentListScreenlet extends BaseScreenlet<WebContentListScreenletProps> {}