'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeAssetDisplayScreenlet from './Bridges/AssetDisplayScreenlet';

export default class AssetDisplayScreenlet extends Component {
    render() {
        return(
            <NativeAssetDisplayScreenlet 
                {...this.props}
                onAssetResponse={this._onAssetResponse.bind(this)}
                onAssetError={this._onAssetError.bind(this)}
                onConfigureScreenlet={this._onConfigureScreenlet.bind(this)}
                onAsset={this._onAsset.bind(this)}
            />
        );
    }

    // iOS events
    _onAssetResponse(asset) {
        console.log('_onAssetResponse -> ',asset);
        if(!this.props.onAssetResponse) {
            return;
        }
        this.props.onAssetResponse(asset);
    }

    _onAssetError(error) {
        console.log('_onAssetError -> ',error);
        if(!this.props.onAssetError) {
            return;
        }
        this.props.onAssetError(error);
    }

    _onConfigureScreenlet(childScreenlet, asset) {
        console.log('_onConfigureScreenlet -> ',childScreenlet, asset);
        if(!this.props.onConfigureScreenlet) {
            return;
        }
        this.props.onConfigureScreenlet(childScreenlet ,asset);
    }

    _onAsset(asset) {
        console.log('_onAsset -> ', asset);
        if(!this.props.onAsset) {
            return;
        }
        this.props.onAsset(asset);
    }

    // Android events
    _onRetrieveAssetSuccess(assetEntry) {
        console.log('_onRetrieveAssetSuccess -> ', assetEntry);
        if(!this.props.onRetrieveAssetSuccess) {
            return;
        }
        this.props.onRetrieveAssetSuccess(assetEntry);
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}