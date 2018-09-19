'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import BaseScreenlet from './../../Base/BaseScreenlet';
import NativeLoginScreenlet from './Bridges/LoginScreenlet'

export default class LoginScreenlet extends BaseScreenlet {
    constructor(props){
        super(props);   
    }
    render() {
        return(
            <NativeLoginScreenlet 
                {...this.props}
                onLoginSuccess = {this.handleListener('onLoginSuccess', 'userId')}
                onLoginError = {this.handleListener('onLoginError', 'error')}
                onAuthenticationBrowserShown = {this.handleListener('onAuthenticationBrowserShown')}
                onCredentialsSavedUserAttributes = {this.handleListener('onCredentialsSavedUserAttributes', 'attributes')}
                onCredentialsLoadedUserAttributes = {this.handleListener('onCredentialsLoadedUserAttributes', 'attributes')}
            />
        );
    }
}