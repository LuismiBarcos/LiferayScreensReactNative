'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeImageDisplayScreenlet from './Bridges/ImageDisplayScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class ImageDisplayScreenlet extends BaseScreenlet {  
    render(){
        return(
            <NativeImageDisplayScreenlet 
                {...this.props}
                // iOS Events
                onFileAssetResponse={this.handleListener('onFileAssetResponse', 'url')}
                onFileAssetError={this.handleListener('onFileAssetError', 'error')}
                // Android Events
                onRetrieveAssetSuccess={this.handleListener('onRetrieveAssetSuccess', 'assetEntry')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}