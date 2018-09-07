'use strict'
import React, {Component} from 'react';
import { requireNativeComponent} from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeForgotPasswordScreenlet = requireNativeComponent('ForgotPasswordScreenlet');

export default class ForgotPasswordScreenlet extends Component {
    constructor(props){
        super(props);
        this.state = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0
        };
        this._onForgotPasswordRequestSuccess = this._onForgotPasswordRequestSuccess.bind(this);
        this._onForgotPasswordRequestFailure = this._onForgotPasswordRequestFailure.bind(this);
    }
    componentWillMount(){
        //Events
        DeviceEventEmitter.addListener('onForgotPasswordScreenletRequestSuccess', this._onForgotPasswordRequestSuccess);
        DeviceEventEmitter.addListener('onForgotPasswordScreenletRequestFailure', this._onForgotPasswordRequestFailure);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeForgotPasswordScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events

    _onForgotPasswordRequestSuccess(event) {
        if(!this.props.onForgotPasswordRequestSuccess) {
            return;
        }
        this.props.onForgotPasswordRequestSuccess(event.passwordSent);
    }

    _onForgotPasswordRequestFailure(event) {
        if(!this.props.onForgotPasswordRequestFailure) {
            return;
        }
        this.props.onForgotPasswordRequestFailure(event.error);
    }
}