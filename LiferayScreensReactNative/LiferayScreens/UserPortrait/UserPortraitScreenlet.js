'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeUserPortraitScreenlet from './Bridges/UserPortraitScreenlet'

export default class UserPortraitScreenlet extends Component {
    render() {
        return (
            <NativeUserPortraitScreenlet 
                {... this.props}
                // Common events
                onUserPortraitLoaded={this._onUserPortraitLoaded.bind(this)}
                onUserPortraitError = {this._onUserPortraitError.bind(this)}
                onUserPortraitUploaded = {this._onUserPortraitUploaded.bind(this)}
                // iOS events
                onUserPortraitUploadError={this._onUserPortraitUploadError.bind(this)}
                // Android events
                onUserPortraitLoadReceived = {this._onUserPortraitLoadReceived.bind(this)}
            />
        );
    }

    // Common events
    _onUserPortraitLoaded(image) {
        console.log('_onUserPortraitLoaded -> ', image);
        if(!this.props.onUserPortraitLoaded) {
            return;
        }
        this.props.onUserPortraitLoaded(image)
    }

    _onUserPortraitError(error) {
        console.log('_onUserPortraitError -> ', error);
        if(!this.props.onUserPortraitError){
            return;
        }
        this.props.onUserPortraitError(error)
    }

    _onUserPortraitUploaded(attributes) {
        console.log('_onUserPortraitUploaded -> ', attributes);
        if(!this.props.onUserPortraitUploaded){
            return;
        }
        this.props.onUserPortraitUploaded(attributes)
    }

    // iOS events
    _onUserPortraitUploadError(error) {
        console.log('_onUserPortraitUploadError -> ', error);
        if(!this.props.onUserPortraitUploadError){
            return;
        }
        this.props.onUserPortraitUploadError(error)
    }

    // Android events
    _onUserPortraitLoadReceived(imageLoaded) {
        console.log('_onUserPortraitLoadReceived -> ', imageLoaded);
        if(!this.props.onUserPortraitLoadReceived) {
            return;
        }
        this.props.onUserPortraitLoadReceived(imageLoaded);
    }
}