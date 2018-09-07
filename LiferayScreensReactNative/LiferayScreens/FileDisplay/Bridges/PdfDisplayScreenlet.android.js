'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativePdfDisplayScreenlet = requireNativeComponent('PdfDisplayScreenlet');

export default class PdfDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
        }
        this._onRetrieveAssetSuccess = this._onRetrieveAssetSuccess.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onPdfDisplayScreenletRetrieveAssetSuccess', this._onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onPdfDisplayScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativePdfDisplayScreenlet 
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