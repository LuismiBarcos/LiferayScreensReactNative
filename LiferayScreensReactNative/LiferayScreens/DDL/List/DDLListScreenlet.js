'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeDDLListScreenlet from './Bridges/DDLListScreenlet'

export default class DDLListScreenlet extends Component {
    render(){
        return(
            <NativeDDLListScreenlet 
                {...this.props}
                // iOS Events
                onDDLListResponseRecords={this._onDDLListResponseRecords.bind(this)}
                onDDLListError={this._onDDLListError.bind(this)}
                onDDLSelectedRecord={this._onDDLSelectedRecord.bind(this)}
                //Android
                onListPageFailed = {this._onListPageFailed.bind(this)}
                onListPageReceived = {this._onListPageReceived.bind(this)}
                onListItemSelected = {this._onListItemSelected.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS Events
    _onDDLListResponseRecords(records) {
        console.log('_onDDLListResponseRecords -> ', records)
        if(!this.props.onDDLListResponseRecords) {
            return;
        }
        this.props.onDDLListResponseRecords(records);
    }

    _onDDLListError(error) {
        console.log('_onDDLListError -> ', error)
        if(!this.props.onDDLListError) {
            return;
        }
        this.props.onDDLListError(error);
    }

    _onDDLSelectedRecord(record) {
        console.log('_onDDLSelectedRecord -> ', record)
        if(!this.props.onDDLSelectedRecord) {
            return;
        }
        this.props.onDDLSelectedRecord(record);
    }

    // Android events
    _onListPageFailed(pageNumber, error) {
        console.log('_onListPageFailed -> ', pageNumber, error);
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(pageNumber, error);
    }

    _onListPageReceived(list) {
        console.log('_onListPageReceived -> ', list)
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(list);
    }

    _onListItemSelected(itemSelected) {
        console.log('_onListItemSelected -> ', itemSelected)
        if(!this.props.onListItemSelected) {
            return;
        }
        this.props.onListItemSelected(itemSelected);
    }

    _onError(event) {
        console.log('_onError -> ', error)
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}