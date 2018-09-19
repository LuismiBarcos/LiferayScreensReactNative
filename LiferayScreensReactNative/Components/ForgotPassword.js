'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { ForgotPasswordScreenlet } from "./../LiferayScreens";

export default class ForgotPassword extends Component {
    render(){
        return(
            <ForgotPasswordScreenlet 
                style={styles.forgot}
                anonymousApiUserName={"test@liferay.com"}
                anonymousApiPassword={"test11"}
                // iOS Events
                onForgotPasswordSent={this._onForgotPasswordSent}
                onForgotPasswordError={this._onForgotPasswordError}
                // Android Events
                onForgotPasswordRequestSuccess={this._onForgotPasswordRequestSuccess}
                onForgotPasswordRequestFailure={this._onForgotPasswordRequestFailure}
            />
        );
    }

    // iOS Events

    _onForgotPasswordSent(passwordSent) {
        console.log('USUARIO --> _onForgotPasswordSent ', passwordSent);
    }

    _onForgotPasswordError(error) {
        console.log('USUARIO --> _onForgotPasswordError ', passwordSent);
    }

    // Android Events

    _onForgotPasswordRequestSuccess(passwordSent) {
        console.log('USUARIO --> _onForgotPasswordRequestSuccess ', passwordSent);
    }

    _onForgotPasswordRequestFailure(error) {
        console.log('USUARIO --> _onForgotPasswordRequestFailure ', error);
    }
}

const styles = StyleSheet.create({
    forgot: {
      height: 300,
      width: 300
    }
});