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
    // Attributes
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

export interface ImageGalleryScreenletProps {
    // Attributes
    repositoryId: number;
    folderId: number;
    autoLoad: boolean;
    refreshControl: boolean;
    firstPageSize: number;
    pageSize: number;
    // Common events
    onItemSelected: (event: any) => void;
    // iOS events
    onContentsReceived: (event: any) => void;
    onGalleryError: (event: any) => void;
    onImageEntryDeleted: (event: any) => void;
    onImageEntryDeleteError: (event: any) => void;
    onImageUploadStart: (event: any) => void;
    onImageUploadProgress: (event: any) => void;
    onImageUploadError: (event: any) => void;
    onImageUploaded: (event: any) => void;
    onImageUploadDetailViewCreated: (event: any) => void;
    // Android events
    onListPageFailed: (event: any) => void;
    onListPageReceived: (event: any) => void;
    onImageGalleryError: (event: any) => void;
    // There are more events in Android. For now we not handle them
}
export class ImageGalleryScreenlet extends BaseScreenlet<ImageGalleryScreenletProps> {}

export interface RatingScreenletProps {
    // Attributes
    autoLoad: boolean;
    editable: boolean;
    entryId: number;
    className: string;
    classPK: number;
    groupId: number;
    // iOS events
    onRatingRetrieve: (event: any) => void;
    onRatingDeleted: (event: any) => void;
    onRatingUpdated: (event: any) => void;
    onRatingError: (event: any) => void;
    // Android events
    onRatingOperationSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class RatingScreenlet extends BaseScreenlet<RatingScreenletProps> {}

export interface CommentListScreenletProps {
    // Attributes
    className: string;
    classPK: number;
    editable: boolean;
    autoLoad: boolean;
    refreshControl: boolean;
    firstPageSize: number;
    pageSize: number;
    // iOS Events
    onListResponseComments: (event: any) => void;
    onCommentListError: (event: any) => void;
    onSelectedComment: (event: any) => void;
    onDeletedComment: (event: any) => void;
    onCommentDelete: (event: any) => void;
    onUpdatedComment: (event: any) => void;
    onCommentUpdate: (event: any) => void;
    // Android Events
    onDeleteCommentSuccess: (event: any) => void;
    onUpdateCommentSuccess: (event: any) => void;
    onListPageFailed: (event: any) => void;
    onListPageReceived: (event: any) => void;
    onListItemSelected: (event: any) => void;
    onError: (event: any) => void;
}
export class CommentListScreenlet extends BaseScreenlet<CommentListScreenletProps> {}

export interface CommentDisplayScreenletProps {
    // Attributes
    commentId:number;
    autoLoad: boolean;
    editable: boolean;
    // iOS events
    onCommentLoaded: (event: any) => void;
    onLoadCommentError: (event: any) => void;
    onCommentDeleted: (event: any) => void;
    onDeleteComment: (event: any) => void;
    onCommentUpdated: (event: any) => void;
    onUpdateComment: (event: any) => void;
    // Android events
    onLoadCommentSuccess: (event: any) => void;
    onDeleteCommentSuccess: (event: any) => void;
    onUpdateCommentSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class CommentDisplayScreenlet extends BaseScreenlet<CommentDisplayScreenletProps> {}

export interface CommentAddScreenletProps {
    // Attributes
    className: string;
    classPK: number;
    // iOS events
    onCommentAdded: (event: any) => void;
    onAddCommentError: (event: any) => void;
    onCommentUpdated: (event: any) => void;
    onUpdateCommentError: (event: any) => void;
    // Android events
    onAddCommentSuccess: (event: any) => void;
    onError: (event: any) => void;

}
export class CommentAddScreenlet extends BaseScreenlet<CommentAddScreenletProps> {}

export interface AssetDisplayScreenletProps {
    // Attributes
    autoLoad: boolean;
    entryId: number;
    className: string;
    classPK: number;
    portletItemName: string;
    assetEntryId: number;
    // iOS Events
    onAssetResponse: (event: any) => void;
    onAssetError: (event: any) => void;
    onConfigureScreenlet: (event: any) => void;
    onAsset: (event: any) => void;
    // Android Events
    onRetrieveAssetSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class AssetDisplayScreenlet extends BaseScreenlet<AssetDisplayScreenletProps> {}

export interface BlogsEntryDisplayScreenletProps {
    // Attributes
    entryId: number;
    autoLoad: boolean;
    className: string;
    classPK: number;
    assetEntryId: number;
    //iOS events
    onBlogEntryResponse: (event: any) => void;
    onBlogEntryError: (event: any) => void;
    // Android events
    onRetrieveAssetSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class BlogsEntryDisplayScreenlet extends BaseScreenlet<BlogsEntryDisplayScreenletProps> {}

export interface ImageDisplayScreenletProps {
    // Attributes
    autoLoad: boolean;
    entryId: number;
    className: string;
    classPK: number;
    assetEntryId: number;
    // iOS Events
    onFileAssetResponse: (event: any) => void;
    onFileAssetError: (event: any) => void;
    // Android Events
    onRetrieveAssetSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class ImageDisplayScreenlet extends BaseScreenlet<ImageDisplayScreenletProps> {}

export interface VideoDisplayScreenletProps {
    // Attributes
    entryId: number;
    autoLoad: boolean;
    className: string;
    classPK: number;
    assetEntryId: number;
    // iOS Events
    onFileAssetResponse: (event: any) => void;
    onFileAssetError: (event: any) => void;
    // Android Events
    onVideoPrepared: (event: any) => void;
    onVideoError: (event: any) => void;
    onVideoCompleted: (event: any) => void;
    onRetrieveAssetSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class VideoDisplayScreenlet extends BaseScreenlet<VideoDisplayScreenletProps> {}

export interface AudioDisplayScreenletProps {
    // Attributes
    assetEntryId: number;
    autoLoad: boolean;
    className: string;
    classPK: number;
    entryId: number;
    // iOS events
    onFileAssetResponse: (event: any) => void;
    onFileAssetError: (event: any) => void;
    // Android events
    onRetrieveAssetSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class AudioDisplayScreenlet extends BaseScreenlet<AudioDisplayScreenletProps> {}

export interface PdfDisplayScreenletProps {
    // Attributes
    assetEntryId: number;
    autoLoad: boolean;
    className: string;
    classPK: number;
    entryId: number;
    // iOS events
    onFileAssetResponse: (event: any) => void;
    onFileAssetError: (event: any) => void;
    // Android events
    onRetrieveAssetSuccess: (event: any) => void;
    onError: (event: any) => void;
}
export class PdfDisplayScreenlet extends BaseScreenlet<PdfDisplayScreenletProps> {}

export interface WebScreenletProps {
    // Attributes
    URL: string;
    jsFileName: string;
    cssFileName: string;
    // Common Events
    onPageLoaded: (event: any) => void;
    // iOS Events
    onWebError: (event: any) => void;
    onNotify: (event: any) => void;
    // Android Events
    onScriptMessageHandler: (event: any) => void;
    onError: (event: any) => void;
}
export class WebScreenlet extends BaseScreenlet<WebScreenletProps> {}

export interface FileDisplayScreenletProps {
    assetEntryId: number;
    autoLoad: boolean;
    className: string;
    classPK: number;
}
export class FileDisplayScreenlet extends BaseScreenlet<FileDisplayScreenletProps> {}