'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeWebScreenlet from './Bridges/WebScreenlet'

export default class WebScreenlet extends Component {
    render() {
        return(
            <NativeWebScreenlet 
                {...this.props}
                // iOS Events
                onWebError={this._onWebError.bind(this)}
                onNotify={this._onNotify.bind(this)}
                // android events
                onScriptMessageHandler = {this._onScriptMessageHandler.bind(this)}
                onError = {this._onError.bind(this)}
                // Common events
                onPageLoaded = {this._onPageLoaded.bind(this)}
            />
        );
    }


    // Common events
    _onPageLoaded(url) {
        console.log('_onPageLoaded -> ', url)
        if(!this.props.onPageLoaded){
            return;
        }
        this.props.onPageLoaded(url)
    }

    // iOS events
    _onWebError(error) {
        console.log('_onWebError -> ', error)
        if(!this.props.onWebError){
            return;
        }
        this.props.onWebError(error)
    }

    _onNotify(namespace, message) {
        console.log('_onNotify -> ', namespace, message)
        if(!this.props.onNotify){
            return;
        }
        this.props.onNotify(namespace, message);
    }

    // Android events
    _onScriptMessageHandler(message) {
        console.log('_onScriptMessageHandler -> ', message);
        if(!this.props.onScriptMessageHandler) {
            return;
        }
        this.props.onScriptMessageHandler(message);
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}