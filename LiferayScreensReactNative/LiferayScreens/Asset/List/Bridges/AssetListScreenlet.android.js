'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeAssetListScreenlet = requireNativeComponent('AssetListScreenlet');

export default class AssetListScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            groupId: props.groupId || 0,
            portletItemName: props.portletItemName || "",
            classNameId: props.classNameId || 0,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onAssetListScreenletListPageFailed', this.props.onListPageFailed);
        DeviceEventEmitter.addListener('onAssetListScreenletListPageReceived', this.props.onListPageReceived);
        DeviceEventEmitter.addListener('onAssetListScreenletListItemSelected', this.props.onListItemSelected);
        DeviceEventEmitter.addListener('onAssetListScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeAssetListScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}