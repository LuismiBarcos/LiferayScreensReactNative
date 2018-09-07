'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeImageDisplayScreenlet = requireNativeComponent('ImageDisplayScreenlet');

export default class ImageDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            autoLoad: props.autoLoad || true,
            entryId: props.entryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
        }
        this._onRetrieveAssetSuccess = this._onRetrieveAssetSuccess.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onImageDisplayScreenletRetrieveAssetSuccess', this._onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onImageDisplayScreenletError', this._onError);
    }
    
    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeImageDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onRetrieveAssetSuccess(event) {
        if(!this.props.onRetrieveAssetSuccess) {
            return;
        }
        this.props.onRetrieveAssetSuccess(JSON.parse(event.assetEntry));
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}