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
                anonymousApiUserName={"test@liferay.com"}
                anonymousApiPassword={"test11"}
            />
        );
    }
}

const styles = StyleSheet.create({
    signup: {
      height: 400,
      width: 300
    }
  });