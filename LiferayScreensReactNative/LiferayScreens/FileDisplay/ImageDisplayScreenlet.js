'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeImageDisplayScreenlet from './Bridges/ImageDisplayScreenlet'

export default class ImageDisplayScreenlet extends Component {  
    render(){
        return(
            <NativeImageDisplayScreenlet 
                {...this.props}
                onFileAssetResponse={this._onFileAssetResponse.bind(this)}
                onFileAssetError={this._onFileAssetError.bind(this)}
                onRetrieveAssetSuccess={this._onRetrieveAssetSuccess.bind(this)}
                onError={this._onError.bind(this)}
            />
        );
    }

    // iOS events
    _onFileAssetResponse(url) {
        console.log('_onFileAssetResponse -> ', url)
        if(!this.props.onFileAssetResponse) {
            return;
        }
        this.props.onFileAssetResponse(url)
    }

    _onFileAssetError(error) {
        console.log('_onFileAssetError -> ', error)
        if(!this.props.onFileAssetError) {
            return;
        }
        this.props.onFileAssetError(error)
    }

    // Android events
    _onRetrieveAssetSuccess(assetEntry) {
        console.log('_onRetrieveAssetSuccess -> ', assetEntry);
        if(!this.props.onRetrieveAssetSuccess) {
            return;
        }
        this.props.onRetrieveAssetSuccess(JSON.parse(assetEntry));
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}