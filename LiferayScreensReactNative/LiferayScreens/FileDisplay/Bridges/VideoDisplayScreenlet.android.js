'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeVideoDisplayScreenlet = requireNativeComponent('VideoDisplayScreenlet');

export default class VideoDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            entryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
            theme: props.theme || ""
        }
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onVideoDisplayScreenletVideoPrepared', this.props.onVideoPrepared);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletVideoError', this.props.onVideoError);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletVideoCompleted', this.props.onVideoCompleted);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletRetrieveAssetSuccess', this.props.onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeVideoDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}