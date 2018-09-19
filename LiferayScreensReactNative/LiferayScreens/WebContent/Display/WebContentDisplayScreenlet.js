'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeWebContentDisplayScreenlet from './Bridges/WebContentDisplayScreenlet'
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class WebContentDisplayScreenlet extends BaseScreenlet {
    render() {
        return(
            <NativeWebContentDisplayScreenlet 
                {...this.props}
                //iOS
                onWebContentResponse={this.handleListener('onWebContentResponse', 'html')}
                onRecordContentResponse={this.handleListener('onRecordContentResponse', 'record')}
                onWebContentError={this.handleListener('onWebContentError', 'error')}
                //Android
                onWebContentReceived={this.handleListener('onWebContentReceived', 'html')}
                onWebContentTouched={this.handleListener('onWebContentTouched', 'touched')}
                onError={this.handleListener('onError', 'error')}
                // Common events
                onUrlClicked={this.handleListener('onUrlClicked', 'url')}
            />
        );
    }
}