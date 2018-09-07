'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeForgotPasswordScreenlet from './Bridges/ForgotPasswordScreenlet';

export default class ForgotPasswordScreenlet extends Component {    
    render(){
        return(
            <NativeForgotPasswordScreenlet 
                {...this.props}
                onForgotPasswordSent={this._onForgotPasswordSent.bind(this)}
                onForgotPasswordError={this._onForgotPasswordError.bind(this)}
                onForgotPasswordRequestSuccess={this._onForgotPasswordRequestSuccess.bind(this)}
                onForgotPasswordRequestFailure={this._onForgotPasswordRequestFailure.bind(this)}
            />
        );
    }

    // iOS Events
    _onForgotPasswordSent(passwordSent) {
        console.log('_onForgotPasswordSent -> ', passwordSent);
        if(!this.props.onForgotPasswordSent){
            return;
        }
        this.props.onForgotPasswordSent(passwordSent);
     }

     _onForgotPasswordError(error) {
         console.log('onForgotPasswordError -> ', error);
        if(!this.props.onForgotPasswordError){
            return;
        }
        this.props.onForgotPasswordError(error);
    }

    // Android events
    _onForgotPasswordRequestSuccess(passwordSent) {
        console.log('_onForgotPasswordRequestSuccess -> ', passwordSent)
        if(!this.props.onForgotPasswordRequestSuccess) {
            return;
        }
        this.props.onForgotPasswordRequestSuccess(passwordSent);
    }

    _onForgotPasswordRequestFailure(error) {
        console.log('_onForgotPasswordRequestFailure -> ', error);
        if(!this.props.onForgotPasswordRequestFailure) {
            return;
        }
        this.props.onForgotPasswordRequestFailure(error);
    }
}

