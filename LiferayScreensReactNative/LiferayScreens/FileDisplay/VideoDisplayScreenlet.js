'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeVideoDisplayScreenlet from './Bridges/VideoDisplayScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class VideoDisplayScreenlet extends BaseScreenlet {  
    render(){
        return(
            <NativeVideoDisplayScreenlet 
                {...this.props}
                // iOS Events
                onFileAssetResponse={this.handleListener('onFileAssetResponse', 'url')}
                onFileAssetError={this.handleListener('onFileAssetError', 'error')}
                // Android Events
                onVideoPrepared={this.handleListener('onVideoPrepared')}
                onVideoError={this.handleListener('onVideoError', 'error')}
                onVideoCompleted={this.handleListener('onVideoCompleted')}
                onRetrieveAssetSuccess={this.handleListener('onRetrieveAssetSuccess', 'assetEntry')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}