'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeAssetDisplayScreenlet = requireNativeComponent('AssetDisplayScreenlet');

export default class AssetDisplayScreenlet extends Component {
    constructor(props){
        super(props)
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            entryId: props.entryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
            portletItemName: props.portletItemName || "",
            theme: props.theme || ""
        }
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onAssetDisplayScreenletRetrieveAssetSuccess', this.props.onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onAssetDisplayScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeAssetDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}