'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeWebScreenlet from './Bridges/WebScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class WebScreenlet extends BaseScreenlet {
    render() {
        return(
            <NativeWebScreenlet 
                {...this.props}
                // Common Events
                onPageLoaded={this.handleListener('onPageLoaded', 'page')}
                // iOS Events
                onWebError={this.handleListener('onWebError', 'error')}
                onNotify={this.handleListener('onNotify', 'namespace', 'message')}
                // Android Events
                onScriptMessageHandler={this.handleListener('onScriptMessageHandler', 'message')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}