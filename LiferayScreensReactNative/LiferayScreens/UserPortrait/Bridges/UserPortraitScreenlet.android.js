'use strict'
import React, {Component} from 'react';
import { requireNativeComponent} from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import BaseScreenlet from '../../Base/BaseScreenlet';

const NativeUserPortraitScreenlet = requireNativeComponent('UserPortraitScreenlet');

export default class UserPortraitScreenlet extends BaseScreenlet {
    constructor(props){
        super(props);
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            userId: props.userId || 0,
            male: props.male || true,
            portraitId: props.portraitId || 0,
            uuid: props.uuid || "",
            editable: props.editable || false
        }
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onUserPortraitScreenletLoadReceived', this.props.onUserPortraitLoadReceived);
        DeviceEventEmitter.addListener('onUserPortraitScreenletUploaded', this.props.onUserPortraitUploaded);
        DeviceEventEmitter.addListener('onUserPortraitScreenletError', this.props.onUserPortraitError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
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
