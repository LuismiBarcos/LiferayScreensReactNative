'use strict';
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeLoginScreenlet = requireNativeComponent('LoginScreenlet');

export default class LoginScreenlet extends Component {
    constructor(props){
        super(props);

        this._onLoginSuccess = this._onLoginSuccess.bind(this);
        this._onLoginError = this._onLoginError.bind(this);
        this._onAuthenticationBrowserShown = this._onAuthenticationBrowserShown.bind(this);
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onLoginScreenletSuccess', this._onLoginSuccess);
        DeviceEventEmitter.addListener('onLoginScreenletError', this._onLoginError);
        DeviceEventEmitter.addListener('onLoginScreenletAuthenticationBrowserShown', this._onAuthenticationBrowserShown);
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

    _onLoginSuccess(event) {
        if(!this.props.onLoginSuccess) {
            return;
        }
        this.props.onLoginSuccess(JSON.parse(event.user));
    }

    _onLoginError(event) {
        if(!this.props.onLoginError) {
            return;
        }
        this.props.onLoginError(event.error);
    }

    _onAuthenticationBrowserShown() {
        if(!this.props.onAuthenticationBrowserShown) {
            return;
        }
        this.props.onAuthenticationBrowserShown();
    }
}