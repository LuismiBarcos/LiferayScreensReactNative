// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [Luis Miguel Barcos] <[https://github.com/LuismiBarcos]>

import React from 'react';
import BaseScreenlet from './Base/BaseScreenlet';

export class BaseScreenlet<T> extends React.Component<T>{}

export interface UserPortraitScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * Whether the portrait should load when the Screenlet is attached to the window.
     */
    autoLoad: boolean;
    
    /**
     * @description
     * The ID of the user whose portrait is being requested. 
     * If this attribute is set, the male, portraitId, and uuid attributes are ignored.
     */
    userId: number;

    /**
     * @description
     * Whether the default portrait placeholder shows a male or female outline. 
     * This attribute is used if userId isn’t specified.
     */
    male: boolean;

    /**
     * @description
     * The ID of the portrait to load. This attribute is used if userId isn’t specified. 
     */
    portraitId: number;

    /**
     * @description
     * The uuid of the user whose portrait is being requested. 
     * This attribute is used if userId isn’t specified. 
     */
    uuid: string;

    /**
     * @description
     * Lets the user change the portrait image by taking a photo or selecting a gallery picture. 
     */
    editable: boolean;

    /**
     * @description
     * The size in pixels for the portrait’s border. The default value is 1. 
     * Set this to 0 if you want to hide the border.
     */
    borderWidth: number;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // COMMON EVENTS
    /**
     * @alias common event
     * @description
     * Called when an image is received from the server.
     * @event image
     */
    onUserPortraitLoaded: (event: any) => void;

    /**
     * @alias common event
     * @description
     * Called when an error occurs in the process. 
     * @event error
     */
    onUserPortraitError: (event: any) => void;

    /**
     * @alias common event
     * @description
     * Called when the user portrait upload service finishes. 
     * @event attributes
     */
    onUserPortraitUploaded: (event: any) => void;

    // iOS EVENTS
    /**
     * @alias ios event
     * @description
     * Called when an error occurs in the upload process.
     * @event error 
     */
    onUserPortraitUploadError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias android event
     * @description
     * Called when an image is received from the server.
     * @event image
     */
    onUserPortraitLoadReceived: (event: any) => void;
}
export class UserPortraitScreenlet extends BaseScreenlet<UserPortraitScreenletProps>{}

export interface LoginScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * When set, the user credentials and attributes are stored securely in the keychain. 
     * This information can then be loaded in subsequent sessions 
     * by calling the SessionContext.loadStoredCredentials() method. 
     */
    saveCredentials: boolean;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // COMMON EVENTS
    /**
     * @alias common event
     * @description
     * Called when login successfully completes.
     * @event userId
     */
    onLoginSuccess: (event: any) => void;

    /**
     * @alias common event
     * @description
     * Called when an error occurs in the process
     * @event error
     */
    onLoginError: (event: any) => void;

    // iOS EVENTS
    /**
     * @alias ios event
     * @description
     * Called when the user credentials are stored after a successful login.
     * @event attributes
     */
    onCredentialsSavedUserAttributes: (event: any) => void;

    /**
     * @alias ios event
     * @description
     * Called when the user credentials are retrieved. 
     * Note that this only occurs when the Screenlet is used and stored credentials are available. 
     * @event attributes
     */
    onCredentialsLoadedUserAttributes: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias android event
     */
    onLoginScreenletAuthenticationBrowserShown: (event: any) => void;
}
export class LoginScreenlet extends BaseScreenlet<LoginScreenletProps>{}

export interface SignUpScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The user’s name, email address, or ID to use for authenticating the request. 
     * The portal’s authentication method defines which of these is used. 
     */
    anonymousApiUserName: string;

    /**
     * @description
     * The password used to authenticate the request. 
     */
    anonymousApiPassword: string;

    /**
     * @description
     * When set, a user in the specified company is authenticated. 
     * If not set, the company specified in LiferayServerContext is used. 
     */
    companyId: number;

    /**
     * @description
     * Sets whether the user is logged in automatically after a successful sign up. 
     */
    autoLogin: boolean;

    /**
     * @description
     * Sets whether or not the user’s credentials and attributes are 
     * stored in the keychain after a successful log in. 
     * This attribute is ignored if autologin is disabled. 
     */
    saveCredentials: boolean;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // COMMON EVENTS
    /**
     * @alias common event
     * @description
     * Called when sign up successfully completes. 
     * The user parameter contains a set of the created user’s attributes. 
     * The supported keys are the same as those in the portal’s User entity.
     * @event user
     */
    onSignUpSuccess: (event: any) => void;

    /**
     * @alias common event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onSignUpFailure: (event: any) => void;
}
export class SignUpScreenlet extends BaseScreenlet<SignUpScreenletProps>{}

export interface ForgotPasswordScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The user name, email address, or userId to use for authenticating the request. 
     * This depends on the portal’s authentication settings. 
     */
    anonymousApiUserName: string;

    /**
     * @description
     * The password to use to authenticate the request. 
     */
    anonymousApiPassword: string;

    /**
     * @description
     * When set, a user within the specified company is authenticated. 
     * If the value is set to 0, the company specified in LiferayServerContext is used. 
     */
    companyId: number;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when a password reset email is successfully sent. 
     * The Boolean parameter indicates whether the email contains the new password or a password reset link.
     * @event passwordSent
     */
    onForgotPasswordSent: (event: any) => void;
    
    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process. 
     * @event error
     */
    onForgotPasswordError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android even
     * @description
     * Called when a password reset email is successfully sent. 
     * The boolean parameter determines whether the email contains the new password or a password reset link.
     * @event passwordSent
     */
    onForgotPasswordRequestSuccess: (event: any) => void;

    /**
     * @alias only android even
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onForgotPasswordRequestFailure: (event: any) => void;
}
export class ForgotPasswordScreenlet extends BaseScreenlet<ForgotPasswordScreenletProps> {}

export interface DDLFormScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The ID of a data definition in your Liferay site. 
     * To find the IDs for your data definitions, click Admin → Content from the Dockbar. 
     * Then click Dynamic Data Lists on the left and click the Manage Data Definitions button. 
     * The ID of each data definition is in the ID column of the table. 
     */
    structureId: number;

    /**
     * @description
     * The ID of the site (group) where the record is stored. 
     * If this value is 0, the groupId specified in LiferayServerContext is used. 
     */
    groupId: number;

    /**
     * @description
     * A dynamic data list’s ID. To find your dynamic data lists’ IDs, click Admin → Content from the Dockbar.
     * Then click Dynamic Data Lists on the left. Each dynamic data list’s ID is in the ID column of the table. 
     */
    recordSetId: number;

    /**
     * @description
     * The ID of the record you want to show. You can also allow the record’s values to be edited. 
     * This ID can be obtained from other methods or listeners. 
     */
    recordId: number;

    /**
     * @description
     * The ID of the Documents and Media repository to upload to. 
     * If this value is 0, the default repository for the site specified by groupId is used. 
     */
    repositoryId: number;

    /**
     * @description
     * The ID of the folder where Documents and Media files are uploaded. If this value is 0, the root is used. 
     */
    folderId: number;

    /**
     * @description
     * Sets whether the form loads when the Screenlet is shown.
     * If recordId is set, the record value is loaded together with the form definition. 
     * The default value is false. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Sets whether the form automatically scrolls to the first failed field when validation is used. 
     * The default value is true. 
     */
    autoscrollOnValidation: boolean;

    /**
     * @description
     * Sets whether the form shows a submit button at the bottom. 
     * If this is set to false, you should call the submitForm() method. 
     * The default value is true. 
     */
    showSubmitButton: boolean;

    /**
     * @description
     * Sets whether the values can be changed by the user. The default is true. 
     */
    editable: boolean;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the form is loaded. The second parameter (record) contains only field definitions.
     * @event record
     */
    onFormLoaded: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs while loading the form. 
     * @event error
     */
    onFormLoadError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a form with values loads. The second parameter (record) contains field definitions and values. 
     * The method onFormLoadResult is called before onRecordLoaded.
     * @event record
     */
    onRecordLoaded: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs while loading a record. 
     * @event error
     */
    onRecordLoadError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the form values are successfully submitted to the server.
     * @event record
     */
    onFormSubmitted: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs while submitting the form. 
     * @event error
     */
    onFormSubmitError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the upload of a Documents and Media field begins.
     * @event field
     */
    onDocumentFieldUploadStarted: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a block of bytes in a Documents and Media field is uploaded.
     * This method is intended to track progress of the uploads.
     * @event field, bytes, totalBytes
     */
    onUploadProgress: (event: any, event: any, event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a Documents and Media field upload is completed.
     * @event field, result
     */
    onUploadFinished: (event: any, event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the Documents and Media upload process. 
     * 
     * @event error
     */
    onUploadError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the form definition successfully loads.
     * @event record
     */
    onDDLFormLoaded: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the form record data successfully loads. 
     * @event map
     */
    onDDLFormRecordLoaded: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the form record is successfully added.
     * @event record
     */
    onDDLFormRecordAdded: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the form record data successfully updates.
     * @event record
     */
    onDDLFormRecordUpdated: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when a specified document field’s upload completes.
     * @event documentField
     */
    onDDLFormDocumentUploaded: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when a specified document field’s upload fails.
     * @event error
     */
    onDDLFormDocumentUploadFailed: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * For example, this method is called when an error occurs while loading a form definition or record, 
     * or adding or updating a record. 
     * The userAction variable distinguishes these events. 
     * @event error
     */
    onError: (event: any) => void;
}
export class DDLFormScreenlet extends BaseScreenlet<DDLFormScreenletProps> {}

export interface DDLListScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * Defines whether the list should be loaded when it’s presented on the screen. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The ID of the DDL being called. To find your DDLs’ IDs, click Admin → Content from the Dockbar. 
     * Then click Dynamic Data Lists on the left. Each DDL’s ID is in the ID column of the table. 
     */
    recordSetId: number;

    /**
     * @description
     * The ID of the user to filter records on. Records aren’t filtered if the userId is 0. 
     * The default value is 0. 
     */
    userId: number;

    /**
     * @description
     * The number of items to retrieve from the server for display on the first page. 
     * The default value is 50. 
     */
    firstPageSize: number;

    /**
     * @description
     * The number of items to retrieve from the server for display on the second and subsequent pages. 
     * The default value is 25. 
     */
    pageSize: number;

    /**
     * @description
     * The comma-separated names of the DDL fields to show. Refer to the list’s data definition to find the field names. 
     * For more information on this, see Creating Data Definitions. 
     * Note that the appearance of these values in your app depends on the layoutId set. 
     */
    labelFields: string;

    /**
     * @description
     * Whether a standard iOS UIRefreshControl appears when the user performs the pull to refresh gesture. The default value is true. 
     */
    refreshControl: boolean;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when a page of contents is received. 
     * Note that this method may be called more than once; once for each retrieved page.
     * @event records
     */
    onDDLListResponseRecords: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process. 
     * @event error
     */
    onDDLListError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an item in the list is selected.
     * @event record
     */
    onDDLSelectedRecord: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items fails. 
     * This method’s arguments include the Exception generated when the server call fails.
     * @event error
     */
    onListPageFailed: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items succeeds. 
     * Note that this method may be called more than once; once for each page received. 
     * Because startRow and endRow change for each page, 
     * a startRow of 0 corresponds to the first item on the first page. 
     * @event list
     */
    onListPageReceived: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an item is selected in the list. 
     * This method’s arguments include the selected list item (Record). 
     * @event itemSelected
     */
    onListItemSelected: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process.
     * The userAction argument distinguishes the specific action in which the error occurred.
     * @event error
     */
    onError: (event: any) => void;
}
export class DDLListScreenlet extends BaseScreenlet<DDLListScreenletProps> {}

export interface AssetListScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The ID of the site (group) where the asset is stored. 
     * If set to 0, the groupId specified in LiferayServerContext is used. The default value is 0. 
     */
    groupId: number;

    /**
     * @description
     * The ID of the asset’s class name. 
     * Use values from the AssetClassNameId class or the Liferay Instance’s classname_ database table. 
     */
    classNameId: number;

    /**
     * @description
     * The name of the configuration template you used in the Asset Publisher. 
     * To use this feature, add an Asset Publisher to one of your site’s pages (it may be a hidden page), 
     * configure the Asset Publisher’s filter (in Configuration → Setup → Asset Selection), 
     * and then use the Asset Publisher’s Configuration Templates option to save this configuration with a name.
     * Use this name as this attribute’s value. 
     */
    portletItemName: string;

    /**
     * @description
     * Whether the list loads automatically when the Screenlet appears in the app’s UI. The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Defines whether a standard ios UIRefreshControl appears when the user does the pull to refresh gesture. 
     * The default value is true. 
     */
    refreshControl: boolean;

    /**
     * @description
     * The number of items retrieved from the server for display on the first page. The default value is 50. 
     */
    firstPageSize: number;

    /**
     * @description
     * The number of items retrieved from the server for display on the second and subsequent pages. 
     * The default value is 25. 
     */
    pageSize: number;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios events
     * @description
     * Called when a page of assets is received. Note that this method may be called more than once; 
     * one call for each page received.
     * @event assets
     */
    onAssetListResponse: (event: any) => void;

    /**
     * @alias only ios events
     * @description
     * Called when an error occurs in the process. 
     * @event error
     */
    onAssetListError: (event: any) => void;

    /**
     * @alias only ios events
     * @description
     * Called when an item in the list is selected.
     * @event asset
     */
    onAssetSelected: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android events
     * @description
     * Called when the server call to retrieve a page of items fails. 
     * This method’s arguments include the Exception generated when the server call fails.
     * @event error
     */
    onListPageFailed: (event: any) => void;

    /**
     * @alias only android events
     * @description
     * Called when the server call to retrieve a page of items succeeds. 
     * Note that this method may be called more than once; once for each page received. 
     * Because startRow and endRow change for each page, 
     * a startRow of 0 corresponds to the first item on the first page. 
     * @event list
     */
    onListPageReceived: (event: any) => void;

    /**
     * @alias only android events
     * @description
     * Called when an item is selected in the list. 
     * This method’s arguments include the selected list item (Model). 
     * @event itemSelected
     */
    onListItemSelected: (event: any) => void;

    /**
     * @alias only android events
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class AssetListScreenlet extends BaseScreenlet<AssetListScreenletProps> {}

export interface WebContentDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The site (group) identifier where the asset is stored. 
     * If this value is 0, the groupId specified in LiferayServerContext is used. 
     */
    groupId: number;

    /**
     * @description
     * The identifier of the web content to display. 
     * You can find the identifier by clicking Edit on the web content in the portal. 
     */
    articleId: string;

    /**
     * @description
     * The identifier of the template used to render the web content. This is applicable only with structured web content. 
     */
    templateId: number;

    /**
     * @description
     * The identifier of the DDMStructure used to model the web content. 
     * This parameter lets the Screenlet retrieve and parse the structure.
     */
    structureId: number;

    /**
     * @description
     * Whether the content should be retrieved from the portal as soon as the Screenlet appears. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;
    
    // COMMON EVENTS
    /**
     * @alias common event
     * @description
     * Decides whether to allow or cancel a navigation.
     * @event url
     */
    onUrlClicked: (event: any) => void;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the web content’s HTML is received.
     * @event html
     */
    onWebContentResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a web content record is received.
     * @event record
     */
    onRecordContentResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onWebContentError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the web content’s HTML or DDMStructure is received. The HTML is available by calling the getHtml method. 
     * To make some adaptations, the listener may return a modified version of the HTML. 
     * The original HTML is rendered if the listener returns null.
     * @event html
     */
    onWebContentReceived: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when something is touched in the web content. 
     * Return true to replace the default behavior, or false to keep processing the event. 
     * @event touched
     */
    onWebContentTouched: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class WebContentDisplayScreenlet extends BaseScreenlet<WebContentDisplayScreenletProps>{}

export interface WebContentListScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * Whether the list loads automatically when the Screenlet appears in the app’s UI. The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The ID of the web content folder to retrieve content from. 
     */
    folderId: number;

    /**
     * @description
     * The ID of the site (group) where the asset is stored. 
     * If set to 0, the groupId specified in LiferayServerContext is used. 
     * The default value is 0. 
     */
    groupId: number;

    /**
     * @description
     * The comma-separated names of the DDM fields to show. Refer to the list’s data definition to find the field names. 
     * For more information on this, see the article on structured web content. 
     * Note that the appearance of data from a structure’s fields depends on the layoutId. 
     */
    labelFields: string;

    /**
     * @description
     * The number of items to display on the first page. The default value is 50. 
     */
    firstPageSize: number;

    /**
     * @description
     * The number of items to display on the second and subsequent pages. 
     * The default value is 25. 
     */
    pageSize: number;

    /**
     * @description
     * Whether a standard iOS UIRefreshControl appears when the user does the pull to refresh gesture. 
     * The default value is true. 
     */
    refreshControl: boolean;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when a page of contents is received. Note that this method may be called more than once: 
     * one call for each page received.
     * @event contents
     */
    onWebContentListResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onWebContentListError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an item in the list is selected.
     * @event content
     */
    onWebContentSelected: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items fails. 
     * This method’s arguments include the Exception generated when the server call fails.
     * @event error
     */
    onListPageFailed: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items succeeds. 
     * Note that this method may be called more than once; once for each page received.
     * Because startRow and endRow change for each page, a startRow of 0 corresponds to the first item on the first page. 
     * @event list
     */
    onListPageReceived: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an item is selected in the list. 
     * This method’s arguments include the selected list item (Record).
     * @event itemSelected
     */
    onListItemSelected: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class WebContentListScreenlet extends BaseScreenlet<WebContentListScreenletProps> {}

export interface ImageGalleryScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The ID of the Liferay instance’s Documents and Media repository that contains the image gallery. 
     * If you’re using a site’s default Documents and Media repository, 
     * then the repositoryId matches the site ID (groupId). 
     */
    repositoryId: number;

    /**
     * @description
     * The ID of the Documents and Media repository folder that contains the image gallery. 
     * When accessing the folder in your browser, the folderId is at the end of the URL. 
     */
    folderId: number;

    /**
     * @description
     * Whether the list automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Whether a standard iOS UIRefreshControl appears when the user does the pull to refresh gesture. 
     * The default value is true. 
     */
    refreshControl: boolean;

    /**
     * @description
     * The number of items to display on the first page. The default value is 50. 
     */
    firstPageSize: number;

    /**
     * @description
     * The number of items to display on the second and subsequent pages. The default value is 25.
     */
    pageSize: number;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // COMMON EVENTS
    /**
     * @alias common event
     * @description
     * Called when an item is selected in the list. 
     * This method’s arguments include the selected list item (Record). 
     * @event image
     */
    onItemSelected: (event: any) => void;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when a page of contents is received. 
     * Note that this method may be called more than once: one call for each page received.
     * @event images
     */
    onContentsReceived: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onGalleryError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an image in the list is deleted.
     * @event image
     */
    onImageEntryDeleted: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs during image file deletion.
     * @event error
     */
    onImageEntryDeleteError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an image is prepared for upload.
     * @event image
     */
    onImageUploadStart: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the image upload progress changes.
     * @event totalBytesSent, totalBytesToSend
     */
    onImageUploadProgress: (event: any, event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the image upload process.
     * @event error
     */
    onImageUploadError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the image upload finishes.
     * @event image
     */
    onImageUploaded: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the image upload View is instantiated. 
     * By default, the screenlet uses a modal view controller to present this View.
     * You only need to implement this method if you want to override this behavior.
     * This method should present the View, passed as parameter, and then return true.
     * @event view
     */
    onImageUploadDetailViewCreated: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items fails. 
     * This method’s arguments include the Exception generated when the server call fails.
     * @event error
     */
    onListPageFailed: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items succeeds. 
     * Note that this method may be called more than once; once for each page received. 
     * Because startRow and endRow change for each page, 
     * a startRow of 0 corresponds to the first item on the first page. 
     * @event images
     */
    onListPageReceived: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onImageGalleryError: (event: any) => void;
    // There are more events in Android. For now we not handle them
}
export class ImageGalleryScreenlet extends BaseScreenlet<ImageGalleryScreenletProps> {}

export interface RatingScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * Whether the rating loads automatically when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Whether the user can change the rating. 
     */
    editable: boolean;

    /**
     * @description
     * The primary key of the asset with the rating to display. 
     */
    entryId: number;

    /**
     * @description
     * The asset’s fully qualified class name. 
     * For example, a blog entry’s className is com.liferay.blogs.kernel.model.BlogsEntry. 
     * The className attribute is required when using it with classPK to instantiate the Screenlet.. 
     */
    className: string;
    
    /**
     * @description
     * The asset’s unique identifier. Only use this attribute when also using className to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The ID of the site (group) containing the asset. 
     */
    groupId: number;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the ratings are received.
     * @event rating
     */
    onRatingRetrieve: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a rating is deleted. 
     * @event rating
     */
    onRatingDeleted: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a rating is updated. 
     * @event rating
     */
    onRatingUpdated: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.  
     * @event error
     */
    onRatingError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the operation finishes successfully and the rating is loaded.
     * @event user
     */
    onRatingOperationSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * @event error
     */
    onError: (event: any) => void;
}
export class RatingScreenlet extends BaseScreenlet<RatingScreenletProps> {}

export interface CommentListScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The asset’s fully qualified class name. 
     * For example, a blog entry’s className is com.liferay.blogs.kernel.model.BlogsEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The asset’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * Whether the user can edit the comment. 
     */
    editable: boolean;

    /**
     * @description
     * Whether the list should automatically load when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Defines whether a standard iOS UIRefreshControl is shown when the user does the pull to refresh gesture. 
     * The default value is true. 
     */
    refreshControl: boolean;

    /**
     * @description
     * The number of items retrieved from the server for display on the first page. 
     * The default value is 50. 
     */
    firstPageSize: number;

    /**
     * @description
     * The number of items retrieved from the server for display on the second and subsequent pages. 
     * The default value is 25. 
     */
    pageSize: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the comments.
     * @event comments
     */
    onListResponseComments: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onCommentListError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a comment is selected.
     * @event comment
     */
    onSelectedComment: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a comment is deleted.
     * @event comment
     */
    onDeletedComment: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet prepares a comment for deletion. 
     * @event comment, error
     */
    onCommentDelete: (event: any, event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a comment is updated. 
     * @event comment
     */
    onUpdatedComment: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet prepares a comment for update. 
     * @event comment, error
     */
    onCommentUpdate: (event: any, event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully deletes the comment.
     * @event commentEntry
     */
    onDeleteCommentSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully updates the comment. 
     * @event commentEntry
     */
    onUpdateCommentSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items fails. 
     * This method’s arguments include the Exception generated when the server call fails. 
     * @event error
     */
    onListPageFailed: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the server call to retrieve a page of items succeeds. 
     * Note that this method may be called more than once; once for each page received. 
     * Because startRow and endRow change for each page, 
     * a startRow of 0 corresponds to the first item on the first page. 
     * @event comments
     */
    onListPageReceived: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an item is selected in the list. 
     * This method’s arguments include the selected list item (CommentEntry). 
     * @event commentEntry
     */
    onListItemSelected: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class CommentListScreenlet extends BaseScreenlet<CommentListScreenletProps> {}

export interface CommentDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The primary key of the comment to display. 
     */
    commentId:number;

    /**
     * @description
     * Whether the list should automatically load when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * Whether the user can edit the comment. 
     */
    editable: boolean;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet loads the comment.
     * @event comment
     */
    onCommentLoaded: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onLoadCommentError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the screenlet prepares the comment for deletion.
     * @event comment
     */
    onCommentDeleted: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a comment is deleted.
     * @event comment, error
     */
    onDeleteComment: (event: any, event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the screenlet prepares the comment for update.
     * @event comment
     */
    onCommentUpdated: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when a comment is updated.
     * @event comment, error
     */
    onUpdateComment: (event: any, event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the comment.
     * @event comment
     */
    onLoadCommentSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully deletes the comment. 
     * @event comment
     */
    onDeleteCommentSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully updates the comment. 
     * @event comment
     */
    onUpdateCommentSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class CommentDisplayScreenlet extends BaseScreenlet<CommentDisplayScreenletProps> {}

export interface CommentAddScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The asset’s fully qualified class name. 
     * For example, a blog entry’s className is com.liferay.blogs.kernel.model.BlogsEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The asset’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet adds a comment.
     * @event comment
     */
    onCommentAdded: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs while adding a comment.
     * @event error
     */
    onAddCommentError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet prepares a comment for update. 
     * @event comment
     */
    onCommentUpdated: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs while updating a comment. 
     * @event error
     */
    onUpdateCommentError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully adds a comment to the asset.
     * @event comment
     */
    onAddCommentSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;

}
export class CommentAddScreenlet extends BaseScreenlet<CommentAddScreenletProps> {}

export interface AssetDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * Whether the asset automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The primary key of the asset. 
     */
    entryId: number;

    /**
     * @description
     * The asset’s fully qualified class name. 
     * For example, a blog entry’s className is com.liferay.blogs.kernel.model.BlogsEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The asset’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The name of the configuration template you used in the Asset Publisher. 
     * To use this feature, add an Asset Publisher to one of your site’s pages (it may be a hidden page), 
     * configure the Asset Publisher’s filter (in Configuration → Setup → Asset Selection), 
     * and then use the Asset Publisher’s Configuration Templates option to save this configuration with a name. 
     * Use this name in this attribute. If there is more than one asset in the configuration, 
     * the Screenlet displays only the first one. 
     */
    portletItemName: string;

    /**
     * @description
     * The Asset object to display, selected from a list of assets. 
     * Note that if you use this attribute, the Screenlet doesn’t need to call the server. 
     */
    assetEntryId: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the asset.
     * @event asset
     */
    onAssetResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process. 
     * @event error
     */
    onAssetError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when the child Screenlet (the Screenlet rendered inside Asset Display Screenlet) has been successfully initialized. 
     * Use this method to configure or customize it. 
     * @event asset
     */
    onConfigureScreenlet: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called to render a custom asset. 
     * @event asset
     */
    onAsset: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the asset.
     * @event assetEntry
     */
    onRetrieveAssetSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class AssetDisplayScreenlet extends BaseScreenlet<AssetDisplayScreenletProps> {}

export interface BlogsEntryDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The primary key of the blog entry (BlogsEntry). 
     */
    entryId: number;

    /**
     * @description
     * Whether the blog entry automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The BlogsEntry object’s fully qualified class name. This is com.liferay.blogs.kernel.model.BlogsEntry. 
     * If you don’t use entryId, the className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The BlogsEntry object’s unique identifier. 
     * If you don’t use entryId, the className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The primary key of the blog entry (BlogsEntry). 
     */
    assetEntryId: number;

    //iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the BlogsEntry object.
     * @event BlogEntry
     */
    onBlogEntryResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onBlogEntryError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the blog entry.
     * @event assetEntry
     */
    onRetrieveAssetSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class BlogsEntryDisplayScreenlet extends BaseScreenlet<BlogsEntryDisplayScreenletProps> {}

export interface ImageDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * Whether the image automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The primary key of the image. 
     */
    entryId: number;

    /**
     * @description
     * The image’s fully qualified class name. 
     * Since files in a Documents and Media Library are DLFileEntry objects, 
     * their className is com.liferay.document.library.kernel.model.DLFileEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The image’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The primary key of the image. 
     */
    assetEntryId: number;

    /**
     * @description
     * Name of the theme which you will use
     */
    theme: string;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the image file.
     * @event url
     */
    onFileAssetResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onFileAssetError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the image.
     * @event assetEntry
     */
    onRetrieveAssetSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred.
     * @event error
     */
    onError: (event: any) => void;
}
export class ImageDisplayScreenlet extends BaseScreenlet<ImageDisplayScreenletProps> {}

export interface VideoDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The primary key of the video file. 
     */
    entryId: number;

    /**
     * @description
     * Whether the video automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The video file’s fully qualified class name. 
     * Since files in a Documents and Media Library are DLFileEntry objects, 
     * the className is com.liferay.document.library.kernel.model.DLFileEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The video file’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The primary key of the video file. 
     */
    assetEntryId: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the image file.
     * @event url
     */
    onFileAssetResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onFileAssetError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the video is prepared.
     */
    onVideoPrepared: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onVideoError: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the video is completed.
     */
    onVideoCompleted: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the video.
     * @event assetEntry
     */
    onRetrieveAssetSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class VideoDisplayScreenlet extends BaseScreenlet<VideoDisplayScreenletProps> {}

export interface AudioDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The primary key of the audio file.
     */
    assetEntryId: number;

    /**
     * @description
     * Whether the audio file automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The audio file’s fully qualified class name. 
     * Since files in a Documents and Media Library are DLFileEntry objects, 
     * their className is com.liferay.document.library.kernel.model.DLFileEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The audio file’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The primary key of the audio file. 
     */
    entryId: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the audio file.
     * @event url
     */
    onFileAssetResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onFileAssetError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the audio file.
     * @event assetEntry
     */
    onRetrieveAssetSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class AudioDisplayScreenlet extends BaseScreenlet<AudioDisplayScreenletProps> {}

export interface PdfDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The primary key of the PDF file. 
     */
    assetEntryId: number;

    /**
     * @description
     * Whether the PDF automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The PDF file’s fully qualified class name. 
     * Since files in a Documents and Media Library are DLFileEntry objects, 
     * their className is com.liferay.document.library.kernel.model.DLFileEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The PDF file’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    /**
     * @description
     * The primary key of the PDF file. 
     */
    entryId: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the PDF.
     * @event url
     */
    onFileAssetResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onFileAssetError: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the Screenlet successfully loads the PDF file.
     * @event url
     */
    onRetrieveAssetSuccess: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event error
     */
    onError: (event: any) => void;
}
export class PdfDisplayScreenlet extends BaseScreenlet<PdfDisplayScreenletProps> {}

export interface WebScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The URL of the web page to display
     */
    URL: string;

    /**
     * @description
     * Name of the JavaScript file
     */
    jsFileName: string;

    /**
     * @description
     * Name of the CSS file
     */
    cssFileName: string;

    // COMMON EVENTS
    /**
     * @alias common event
     * @description
     * Called when the Screenlet loads the page correctly.
     * @event page
     */
    onPageLoaded: (event: any) => void;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event error
     */
    onWebError: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when we want to notify a message from the WKWebView used in the view.
     * @event message
     */
    onNotify: (event: any) => void;

    // ANDROID EVENTS
    /**
     * @alias only android event
     * @description
     * Called when the WebView in the Screenlet sends a message. 
     * @event message
     */
    onScriptMessageHandler: (event: any) => void;

    /**
     * @alias only android event
     * @description
     * Called when an error occurs in the process. 
     * The userAction argument distinguishes the specific action in which the error occurred. 
     * @event 
     */
    onError: (event: any) => void;
}
export class WebScreenlet extends BaseScreenlet<WebScreenletProps> {}

export interface FileDisplayScreenletProps {
    // ATTRIBUTES
    /**
     * @description
     * The primary key of the file. 
     */
    assetEntryId: number;

    /**
     * @description
     * Whether the file automatically loads when the Screenlet appears in the app’s UI. 
     * The default value is true. 
     */
    autoLoad: boolean;

    /**
     * @description
     * The file’s fully qualified class name. 
     * Since files in a Documents and Media Library are DLFileEntry objects, 
     * their className is com.liferay.document.library.kernel.model.DLFileEntry. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    className: string;

    /**
     * @description
     * The file’s unique identifier. 
     * The className and classPK attributes are required to instantiate the Screenlet. 
     */
    classPK: number;

    // iOS EVENTS
    /**
     * @alias only ios event
     * @description
     * Called when the Screenlet receives the file.
     * @event
     */
    onFileAssetResponse: (event: any) => void;

    /**
     * @alias only ios event
     * @description
     * Called when an error occurs in the process.
     * @event
     */
    onFileAssetError: (event: any) => void;
}
export class FileDisplayScreenlet extends BaseScreenlet<FileDisplayScreenletProps> {}