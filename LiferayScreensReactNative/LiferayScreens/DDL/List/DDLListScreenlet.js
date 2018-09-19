'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeDDLListScreenlet from './Bridges/DDLListScreenlet'
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class DDLListScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeDDLListScreenlet 
                {...this.props}
                // iOS Events
                onDDLListResponseRecords={this.handleListener('onDDLListResponseRecords', 'records')}
                onDDLListError={this.handleListener('onDDLListError', 'error')}
                onDDLSelectedRecord={this.handleListener('onDDLSelectedRecord', 'record')}
                //Android
                onListPageFailed={this.handleListener('onListPageFailed', 'error')}
                onListPageReceived={this.handleListener('onListPageReceived', 'list')}
                onListItemSelected={this.handleListener('onListItemSelected', 'itemSelected')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}