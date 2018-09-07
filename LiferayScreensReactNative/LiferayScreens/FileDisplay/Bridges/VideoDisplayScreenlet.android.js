'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeVideoDisplayScreenlet = requireNativeComponent('VideoDisplayScreenlet');

export default class VideoDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
        }
        this._onVideoPrepared = this._onVideoPrepared.bind(this);
        this._onVideoError = this._onVideoError.bind(this);
        this._onVideoCompleted = this._onVideoCompleted.bind(this);
        this._onRetrieveAssetSuccess = this._onRetrieveAssetSuccess.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onVideoDisplayScreenletVideoPrepared', this._onVideoPrepared);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletVideoError', this._onVideoError);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletVideoCompleted', this._onVideoCompleted);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletRetrieveAssetSuccess', this._onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onVideoDisplayScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeVideoDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onVideoPrepared(event) {
        if(!this.props.onVideoPrepared) {
            return;
        }
        this.props.onVideoPrepared();
    }

    _onVideoError(event) {
        if(!this.props.onVideoError) {
            return;
        }
        this.props.onVideoError(event.error);
    }

    _onVideoCompleted(event) {
        if(!this.props.onVideoCompleted) {
            return;
        }
        this.props.onVideoCompleted();
    }

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