'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeSignUpScreenlet from './Bridges/SignUpScreenlet';

export default class SignUpScreenlet extends Component {
    render(){
        return(
            <NativeSignUpScreenlet 
                {...this.props}
                onSignUpSuccess={this._onSignUpSuccess.bind(this)}
                onSignUpFailure={this._onSignUpFailure.bind(this)}
            />
        );
    }

    // Common events
    _onSignUpSuccess(user) {
        console.log('Sign up! -> new user', user);
        if(!this.props.onSignUpSuccess) {
            return;
        }
        this.props.onSignUpSuccess(user);
    }

    _onSignUpFailure(error) {
        console.log('Sign up error! -> ', error);
        if(!this.props.onSignUpFailure) {
            return;
        }
        this.props.onSignUpFailure(error);
    }
}