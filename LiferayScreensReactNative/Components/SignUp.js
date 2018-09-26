'use strict'
import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  NativeModules
} from 'react-native';

import { SignUpScreenlet } from "./../LiferayScreens";

export default class SignUp extends Component {
    render(){
        return(
            <SignUpScreenlet 
                style={styles.signup}
                theme={"custom"}
                anonymousApiUserName={"test@liferay.com"}
                anonymousApiPassword={"test11"}
                onSignUpSuccess={this._onSignUpSuccess.bind(this)}
                onSignUpFailure={this._onSignUpFailure.bind(this)}
            />
        );
    }

    _onSignUpSuccess(user) {
        console.log('USUARIO --> _onSignUpSuccess ', user);
    }

    _onSignUpFailure(error) {
        console.log('USUARIO --> _onSignUpSuccess ', error);
    }
}

const styles = StyleSheet.create({
    signup: {
      height: 400,
      width: 300
    }
  });