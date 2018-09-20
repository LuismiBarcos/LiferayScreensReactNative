'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeWebContentListScreenlet from './Bridges/WebContentListScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class WebContentListScreenlet extends BaseScreenlet {
    render() {
        return(
            <NativeWebContentListScreenlet 
                {...this.props}
                // iOS events
                onWebContentListResponse={this.handleListener('onWebContentListResponse', 'contents')}
                onWebContentListError={this.handleListener('onWebContentListError', 'error')}
                onWebContentSelected={this.handleListener('onWebContentSelected', 'content')}
                // Android events
                onListPageFailed={this.handleListener('onListPageFailed', 'error')}
                onListPageReceived={this.handleListener('onListPageReceived', 'list')}
                onListItemSelected={this.handleListener('onListItemSelected', 'itemSelected')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}