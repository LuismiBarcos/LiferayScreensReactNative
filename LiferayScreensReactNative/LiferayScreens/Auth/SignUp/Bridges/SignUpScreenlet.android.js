'use strict'
import React, {Component} from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeSignUpScreenlet = requireNativeComponent('SignUpScreenlet');

export default class SignUpScreenlet extends Component {
    constructor(props){
        super(props);

        this.state = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0,
            autoLogin: props.autoLoad || true
        }

        this._onSignUpSuccess = this._onSignUpSuccess.bind(this);
        this._onSignUpFailure = this._onSignUpFailure.bind(this);
    }
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onSignUpScreenletSuccess', this._onSignUpSuccess);
        DeviceEventEmitter.addListener('onSignUpScreenletFailure', this._onSignUpFailure);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeSignUpScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onSignUpSuccess(event) {
        if(!this.props.onSignUpSuccess) {
            return;
        }
        this.props.onSignUpSuccess(JSON.parse(event.user));
    }

    _onSignUpFailure(event) {
        if(!this.props.onSignUpFailure) {
            return;
        }
        this.props.onSignUpFailure(event.error);
    }
}