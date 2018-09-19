'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeForgotPasswordScreenlet from './Bridges/ForgotPasswordScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class ForgotPasswordScreenlet extends BaseScreenlet {    
    render(){
        return(
            <NativeForgotPasswordScreenlet 
                {...this.props}
                // iOS Events
                onForgotPasswordSent={this.handleListener('onForgotPasswordSent', 'passwordSent')}
                onForgotPasswordError={this.handleListener('onForgotPasswordError', 'error')}
                // Android Events
                onForgotPasswordRequestSuccess={this.handleListener('onForgotPasswordRequestSuccess', 'passwordSent')}
                onForgotPasswordRequestFailure={this.handleListener('onForgotPasswordRequestFailure', 'error')}
            />
        );
    }
}

