'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeUserPortraitScreenlet from './Bridges/UserPortraitScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class UserPortraitScreenlet extends BaseScreenlet {
    render() {
        return (
            <NativeUserPortraitScreenlet 
                {... this.props}
                // Common events
                onUserPortraitLoaded={this.handleListener('onUserPortraitLoaded', 'image')}
                onUserPortraitError = {this.handleListener('onUserPortraitError', 'error')}
                onUserPortraitUploaded = {this.handleListener('onUserPortraitUploaded', 'attributes')}
                // iOS events
                onUserPortraitUploadError={this.handleListener('onUserPortraitUploadError', 'error')}
                // Android events
                onUserPortraitLoadReceived = {this.handleListener('onUserPortraitLoadReceived', 'image')}
            />
        );
    }
}