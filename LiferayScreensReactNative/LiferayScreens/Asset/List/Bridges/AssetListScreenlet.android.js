'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeAssetListScreenlet = requireNativeComponent('AssetListScreenlet');

export default class AssetListScreenlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoLoad: props.autoLoad || true,
            groupId: props.groupId || 0,
            portletItemName: props.portletItemName || "",
            classNameId: props.classNameId || 0,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }
        this._onListPageFailed = this._onListPageFailed.bind(this);
        this._onListPageReceived = this._onListPageReceived.bind(this);
        this._onListItemSelected = this._onListItemSelected.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onAssetListScreenletListPageFailed', this._onListPageFailed);
        DeviceEventEmitter.addListener('onAssetListScreenletListPageReceived', this._onListPageReceived);
        DeviceEventEmitter.addListener('onAssetListScreenletListItemSelected', this._onListItemSelected);
        DeviceEventEmitter.addListener('onAssetListScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeAssetListScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onListPageFailed(event) {
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(event.pageNumber, event.error);
    }

    _onListPageReceived(event) {
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(event.list);
    }

    _onListItemSelected(event) {
        if(!this.props.onListItemSelected) {
            return;
        }
        this.props.onListItemSelected(event.itemSelected);
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}