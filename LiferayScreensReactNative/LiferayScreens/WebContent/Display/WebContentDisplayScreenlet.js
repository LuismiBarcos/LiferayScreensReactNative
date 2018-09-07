'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeWebContentDisplayScreenlet from './Bridges/WebContentDisplayScreenlet'

export default class WebContentDisplayScreenlet extends Component {
    render() {
        return(
            <NativeWebContentDisplayScreenlet 
                {...this.props}
                //iOS
                onWebContentResponse={this._onWebContentResponse.bind(this)}
                onRecordContentResponse={this._onRecordContentResponse.bind(this)}
                onWebContentError={this._onWebContentError.bind(this)}
                //Android
                onWebContentReceived = {this._onWebContentReceived.bind(this)}
                onWebContentTouched = {this._onWebContentTouched.bind(this)}
                onError = {this._onError.bind(this)}
                // Common events
                onUrlClicked={this._onUrlClicked.bind(this)}
            />
        );
    }

    // Common events
    _onUrlClicked(url) {
        console.log('_onUrlClicked -> ', url);
        if(!this.props.onUrlClicked){
            return;
        }
        this.props.onUrlClicked(url)
    }
    //iOS Events
    _onWebContentResponse(html) {
        console.log('_onWebContentResponse -> ', html);
        if(!this.props.onWebContentResponse){
            return;
        }
        this.props.onWebContentResponse(html)
    }

    _onRecordContentResponse(record) {
        console.log('_onRecordContentResponse -> ', record);
        if(!this.props.onRecordContentResponse){
            return;
        }
        this.props.onRecordContentResponse(record)
    }

    _onWebContentError(error) {
        console.log('_onWebContentError -> ', error);
        if(!this.props.onWebContentError){
            return;
        }
        this.props.onWebContentError(error)
    }

    // Android events
    _onWebContentReceived(html) {
        console.log('_onWebContentReceived -> ', html)
        if(!this.props.onWebContentReceived) {
            return;
        }
        this.props.onWebContentReceived(html);
    }

    _onWebContentTouched(touched) {
        console.log('_onWebContentTouched -> ', touched)
        if(!this.props.onWebContentTouched) {
            return;
        }
        this.props.onWebContentTouched(touched);
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}