'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

const NativeUserPortraitScreenlet = requireNativeComponent('SignUpScreenlet');

export default class SignUpScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0,
            autoLogin: props.autoLogin || true,
            saveCredentials: props.saveCredentials || true
        }
    }
    render(){
        return(
            <NativeUserPortraitScreenlet 
                {...this.props}
                screenletAttributes={this.state}
                onSignUpResponseUserAttributes={this._onSignUpResponseUserAttributes.bind(this)}
                onSignUpError={this._onSignUpError.bind(this)}
            />
        );
    }

    // Events 
    _onSignUpResponseUserAttributes(event) {
        if(!this.props.onSignUpSuccess) {
            return;
        }
        this.props.onSignUpSuccess(event.nativeEvent.user)
    }

    _onSignUpError(event) {
        if(!this.props.onSignUpFailure) {
            return;
        }
        this.props.onSignUpFailure(event.nativeEvent.error);
    }
}