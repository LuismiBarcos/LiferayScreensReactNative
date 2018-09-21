'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativePdfDisplayScreenlet = requireNativeComponent('PdfDisplayScreenlet');

export default class PdfDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.screenletAttributes = {
            entryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onPdfDisplayScreenletRetrieveAssetSuccess', this.props.onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onPdfDisplayScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativePdfDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}