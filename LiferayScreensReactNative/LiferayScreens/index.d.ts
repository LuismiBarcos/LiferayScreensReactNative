// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [Luis Miguel Barcos] <[https://github.com/LuismiBarcos]>

import React from 'react';

export class Base<T> extends React.Component<T>{}

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
export class UserPortraitScreenlet extends Base<UserPortraitScreenletProps>{}

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
export class LoginScreenlet extends Base<LoginScreenletProps>{}
