'use-strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

const NativeLoginScreenlet = requireNativeComponent('LoginScreenlet');

export default class LoginScreenlet extends Component {
    render() {
        return (
            <NativeLoginScreenlet
                {...this.props}
                style={this.props.style}
                onLoginSuccess={this._onLoginSuccess.bind(this)}
                onLoginError={this._onLoginError.bind(this)}
                onCredentialsSavedUserAttributes={this._onCredentialsSavedUserAttributes.bind(this)}
                onCredentialsLoadedUserAttributes={this._onCredentialsLoadedUserAttributes.bind(this)}
            />
        );
    }

    // Events 
    _onLoginSuccess(attributes) {
        if(!this.props.onLoginSuccess) {
            return;
        }
        this.props.onLoginSuccess(attributes.nativeEvent);
    }

    _onLoginError(error) {
        if(!this.props.onLoginError) {
            return;
        }
        this.props.onLoginError(error.nativeEvent.error);
    }

    _onCredentialsSavedUserAttributes(attributes) {
        if(!this.props.onCredentialsSavedUserAttributes) {
            return;
        }
        this.props.onCredentialsSavedUserAttributes(attributes.nativeEvent);
    }

    _onCredentialsLoadedUserAttributes(attributes) {
        if(!this.onCredentialsLoadedUserAttributes) {
            return;
        }
        this.props.onCredentialsLoadedUserAttributes(attributes.nativeEvent);
    }
}