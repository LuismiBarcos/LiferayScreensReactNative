'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeAssetDisplayScreenlet from './Bridges/AssetDisplayScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class AssetDisplayScreenlet extends BaseScreenlet {
    render() {
        return(
            <NativeAssetDisplayScreenlet 
                {...this.props}
                // iOS Events
                onAssetResponse={this.handleListener('onAssetResponse', 'asset')}
                onAssetError={this.handleListener('onAssetError', 'error')}
                onConfigureScreenlet={this.handleListener('onConfigureScreenlet', 'asset')}
                onAsset={this.handleListener('onAsset', 'asset')}
                // Android Events
                onRetrieveAssetSuccess={this.handleListener('onRetrieveAssetSuccess', 'assetEntry')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}