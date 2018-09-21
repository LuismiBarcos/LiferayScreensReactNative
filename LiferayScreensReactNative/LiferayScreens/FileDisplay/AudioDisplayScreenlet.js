'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeAudioDisplayScreenlet from './Bridges/AudioDisplayScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class AudioDisplayScreenlet extends BaseScreenlet {  
    render(){
        return(
            <NativeAudioDisplayScreenlet 
                {...this.props}
                // iOS events
                onFileAssetResponse={this.handleListener('onFileAssetResponse', 'url')}
                onFileAssetError={this.handleListener('onFileAssetResponse', 'error')}
                // Android events
                onRetrieveAssetSuccess={this.handleListener('onFileAssetResponse', 'assetEntry')}
                onError={this.handleListener('onFileAssetResponse', 'error')}
            />
        );
    }
}