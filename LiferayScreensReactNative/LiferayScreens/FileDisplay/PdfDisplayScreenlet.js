'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativePdfDisplayScreenlet from './Bridges/PdfDisplayScreenlet';
import BaseScreenlet from '../Base/BaseScreenlet';

export default class PdfDisplayScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativePdfDisplayScreenlet 
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

