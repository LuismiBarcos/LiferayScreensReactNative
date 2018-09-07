'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeFileDisplayScreenlet from './Bridges/FileDisplayScreenlet.ios';

export default class FileDisplayScreenlet extends Component {
    render(){
        return(
            <NativeFileDisplayScreenlet 
                {...this.props}
                // iOS Events
                onFileAssetResponse={this._onFileAssetResponse.bind(this)}
                onFileAssetError={this._onFileAssetError.bind(this)}
            />
        );
    }

    // iOS Events
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
}