'use strict'
import React, {Component} from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeSignUpScreenlet = requireNativeComponent('SignUpScreenlet');

export default class SignUpScreenlet extends Component {
    constructor(props){
        super(props);

        this.screenletAttributes = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0,
            autoLogin: props.autoLoad || true
        }
    }
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onSignUpScreenletSuccess', this.props.onSignUpSuccess);
        DeviceEventEmitter.addListener('onSignUpScreenletFailure', this.props._onSignUpFailure);
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeSignUpScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}