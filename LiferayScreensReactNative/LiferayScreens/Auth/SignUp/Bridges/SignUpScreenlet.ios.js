'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

const NativeUserPortraitScreenlet = requireNativeComponent('SignUpScreenlet');

export default class SignUpScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.screenletAttributes = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0,
            autoLogin: props.autoLogin || true,
            saveCredentials: props.saveCredentials || true
        }
    }
    render(){
        return(
            <NativeUserPortraitScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}