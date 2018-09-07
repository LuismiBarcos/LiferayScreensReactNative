'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeAssetListScreenlet from './Bridges/AssetListScreenlet'

export default class AssetListScreenlet extends Component {
    render() {
        return(
            <NativeAssetListScreenlet 
                {...this.props}
                // iOS events
                onAssetListResponse={this._onAssetListResponse.bind(this)}
                onAssetListError={this._onAssetListError.bind(this)}
                onAssetSelected={this._onAssetSelected.bind(this)}
                // Android events
                onListPageFailed = {this._onListPageFailed.bind(this)}
                onListPageReceived = {this._onListPageReceived.bind(this)}
                onListItemSelected = {this._onListItemSelected.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS events
    _onAssetListResponse(assets) {
        console.log('_onAssetListResponse -> ', assets);
        if(!this.props.onAssetListResponse) {
            return;
        }
        this.props.onAssetListResponse(assets);
    }

    _onAssetListError(error) {
        console.log('_onAssetListError -> ', error);
        if(!this.props.onAssetListError) {
            return;
        }
        this.props.onAssetListError(error);
    }

    _onAssetSelected(asset) {
        console.log('_onAssetSelected -> ', asset);
        if(!this.props.onAssetSelected) {
            return;
        }
        this.props.onAssetSelected(asset);
    }

    // Android events

    _onListPageFailed(pageNumber, error) {
        console.log('_onListPageFailed -> ', pageNumber, error);
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(pageNumber, error);
    }

    _onListPageReceived(list) {
        console.log('_onListPageReceived -> ', list)
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(list);
    }

    _onListItemSelected(itemSelected) {
        console.log('_onListItemSelected -> ', itemSelected)
        if(!this.props.onListItemSelected) {
            return;
        }
        this.props.onListItemSelected(itemSelected);
    }

    _onError(event) {
        console.log('_onError -> ', error)
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}