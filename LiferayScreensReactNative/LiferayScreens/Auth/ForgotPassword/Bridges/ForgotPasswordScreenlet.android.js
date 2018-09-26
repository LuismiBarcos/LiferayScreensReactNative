'use strict'
import React, {Component} from 'react';
import { requireNativeComponent} from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeForgotPasswordScreenlet = requireNativeComponent('ForgotPasswordScreenlet');

export default class ForgotPasswordScreenlet extends Component {
    constructor(props){
        super(props);
        this.screenletAttributes = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0,
            theme: props.theme || ""
        };
    }
    componentWillMount(){
        //Events
        DeviceEventEmitter.addListener('onForgotPasswordScreenletRequestSuccess', this.props.onForgotPasswordRequestSuccess);
        DeviceEventEmitter.addListener('onForgotPasswordScreenletRequestFailure', this.props.onForgotPasswordRequestFailure);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeForgotPasswordScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}