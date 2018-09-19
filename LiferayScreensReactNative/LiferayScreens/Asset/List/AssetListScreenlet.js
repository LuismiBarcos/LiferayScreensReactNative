'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeAssetListScreenlet from './Bridges/AssetListScreenlet'
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class AssetListScreenlet extends BaseScreenlet {
    render() {
        return(
            <NativeAssetListScreenlet 
                {...this.props}
                // iOS events
                onAssetListResponse={this.handleListener('onAssetListResponse', 'assets')}
                onAssetListError={this.handleListener('onAssetListError', 'error')}
                onAssetSelected={this.handleListener('onAssetSelected', 'asset')}
                // Android events
                onListPageFailed={this.handleListener('onListPageFailed', 'error')}
                onListPageReceived={this.handleListener('onListPageReceived', 'list')}
                onListItemSelected={this.handleListener('onListItemSelected', 'itemSelected')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}