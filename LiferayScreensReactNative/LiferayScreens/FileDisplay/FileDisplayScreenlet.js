'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeFileDisplayScreenlet from './Bridges/FileDisplayScreenlet.ios';
import BaseScreenlet from '../Base/BaseScreenlet';

export default class FileDisplayScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeFileDisplayScreenlet 
                {...this.props}
                // iOS Events
                onFileAssetResponse={this.handleListener('onFileAssetResponse', 'url')}
                onFileAssetError={this.handleListener('onFileAssetResponse', 'error')}
            />
        );
    }
}