'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeAudioDisplayScreenlet = requireNativeComponent('AudioDisplayScreenlet');

export default class AudioDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.screenletAttributes = {
            entryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
            theme: props.theme || ""
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onAudioDisplayScreenletRetrieveAssetSuccess', this.props.onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onAudioDisplayScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeAudioDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}