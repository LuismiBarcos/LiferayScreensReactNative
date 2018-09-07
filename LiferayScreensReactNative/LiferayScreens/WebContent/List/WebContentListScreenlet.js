'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeWebContentListScreenlet from './Bridges/WebContentListScreenlet';

export default class WebContentListScreenlet extends Component {
    render() {
        return(
            <NativeWebContentListScreenlet 
                {...this.props}
                // iOS events
                onWebContentListResponse={this._onWebContentListResponse.bind(this)}
                onWebContentListError={this._onWebContentListError.bind(this)}
                onWebContentSelected={this._onWebContentSelected.bind(this)}
                // Android events
                onListPageFailed = {this._onListPageFailed.bind(this)}
                onListPageReceived = {this._onListPageReceived.bind(this)}
                onListItemSelected = {this._onListItemSelected.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS events
    _onWebContentListResponse(contents){
        console.log('_onWebContentListResponse -> ', contents);
        if(!this.props.onWebContentListResponse) {
            return;
        }
        this.props.onWebContentListResponse(contents);
    }

    _onWebContentListError(error){
        console.log('_onWebContentListError -> ', error);
        if(!this.props.onWebContentListError) {
            return;
        }
        this.props.onWebContentListError(error);
    }

    _onWebContentSelected(content){
        console.log('_onWebContentSelected -> ', content);
        if(!this.props.onWebContentSelected) {
            return;
        }
        this.props.onWebContentSelected(content);
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