'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import BaseScreenlet from './../../Base/BaseScreenlet';
import NativeSignUpScreenlet from './Bridges/SignUpScreenlet';

export default class SignUpScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeSignUpScreenlet 
                {...this.props}
                onSignUpSuccess={this.handleListener('onSignUpSuccess', 'user')}
                onSignUpFailure={this.handleListener('onSignUpFailure', 'error')}
            />
        );
    }
}