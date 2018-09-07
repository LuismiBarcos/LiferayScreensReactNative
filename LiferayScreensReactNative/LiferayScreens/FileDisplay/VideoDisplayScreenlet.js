'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeVideoDisplayScreenlet from './Bridges/VideoDisplayScreenlet'

export default class VideoDisplayScreenlet extends Component {  
    render(){
        return(
            <NativeVideoDisplayScreenlet 
                {...this.props}
                onFileAssetResponse={this._onFileAssetResponse.bind(this)}
                onFileAssetError={this._onFileAssetError.bind(this)}
                // Android events
                onVideoPrepared = {this._onVideoPrepared.bind(this)}
                onVideoError = {this._onVideoError.bind(this)}
                onVideoCompleted = {this._onVideoCompleted.bind(this)}
                onRetrieveAssetSuccess = {this._onRetrieveAssetSuccess.bind(this)}
                onError = {this._onError.bind(this)}
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
    _onVideoPrepared() {
        console.log('_onVideoPrepared -> ');
        if(!this.props.onVideoPrepared) {
            return;
        }
        this.props.onVideoPrepared();
    }

    _onVideoError(error) {
        console.log('_onVideoPrepared -> ', error);
        if(!this.props.onVideoError) {
            return;
        }
        this.props.onVideoError(error);
    }

    _onVideoCompleted() {
        console.log('_onVideoPrepared -> ');
        if(!this.props.onVideoCompleted) {
            return;
        }
        this.props.onVideoCompleted();
    }

    _onRetrieveAssetSuccess(assetEntry) {
        console.log('_onVideoPrepared -> ', assetEntry);
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