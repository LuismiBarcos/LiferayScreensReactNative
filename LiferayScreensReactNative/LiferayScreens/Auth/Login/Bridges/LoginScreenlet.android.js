'use strict';
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeLoginScreenlet = requireNativeComponent('LoginScreenlet');

export default class LoginScreenlet extends Component {    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onLoginScreenletSuccess', this.props.onLoginSuccess);
        DeviceEventEmitter.addListener('onLoginScreenletError', this.props.onLoginError);
        DeviceEventEmitter.addListener('onLoginScreenletAuthenticationBrowserShown', this.props.onAuthenticationBrowserShown);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render() {
        return(
            <NativeLoginScreenlet 
                {...this.props}
            />
        );
    }
}