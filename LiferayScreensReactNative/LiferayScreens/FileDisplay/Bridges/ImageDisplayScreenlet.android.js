'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeImageDisplayScreenlet = requireNativeComponent('ImageDisplayScreenlet');

export default class ImageDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            entryId: props.entryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onImageDisplayScreenletRetrieveAssetSuccess', this.props.onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onImageDisplayScreenletError', this.props.onError);
    }
    
    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeImageDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}