'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeLoginScreenlet from './Bridges/LoginScreenlet'

export default class LoginScreenlet extends Component {
    constructor(props){
        super(props);
        
        
    }
    render() {
        return(
            <NativeLoginScreenlet 
                {...this.props}
                onLoginSuccess = {this._onLoginSuccess.bind(this)}
                onLoginError = {this._onLoginError.bind(this)}
                onAuthenticationBrowserShown = {this._onAuthenticationBrowserShown.bind(this)}
                onCredentialsSavedUserAttributes = {this._onCredentialsSavedUserAttributes.bind(this)}
                onCredentialsLoadedUserAttributes = {this._onCredentialsLoadedUserAttributes.bind(this)}
            />
        );
    }

    _onLoginSuccess(attributes) {
        console.log("login success!");
        if(!this.props.onLoginSuccess) {
            return;
        }
        this.props.onLoginSuccess(attributes);
    }

    _onLoginError(error) {
        console.log("login fail!");
        if(!this.props.onLoginError) {
            return;
        }
        this.props.onLoginError(error);
    }

    // Only available for android
    _onAuthenticationBrowserShown() {
        console.log("authentication browser show");
        if(!this.props.onAuthenticationBrowserShown) {
            return;
        }
        this.props.onAuthenticationBrowserShown();
    }

    // Only available for iOS
    _onCredentialsSavedUserAttributes(attributes) {
        if(!this.props.onCredentialsSavedUserAttributes) {
            return;
        }
        this.props.onCredentialsSavedUserAttributes(attributes.nativeEvent);
    }

    // Only available for iOS
    _onCredentialsLoadedUserAttributes(attributes) {
        if(!this.onCredentialsLoadedUserAttributes) {
            return;
        }
        this.props.onCredentialsLoadedUserAttributes(attributes.nativeEvent);
    }
}