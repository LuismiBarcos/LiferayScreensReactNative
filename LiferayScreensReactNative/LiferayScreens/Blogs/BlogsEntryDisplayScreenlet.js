'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeBlogsEntryDisplayScreenlet from './Bridges/BlogsEntryDisplayScreenlet';

export default class BlogsEntryDisplayScreenlet extends Component {
    render(){
        return(
            <NativeBlogsEntryDisplayScreenlet 
                {...this.props}
                //iOS events
                onBlogEntryResponse={this._onBlogEntryResponse.bind(this)}
                onBlogEntryError={this._onBlogEntryError.bind(this)}
                // Android events
                onRetrieveAssetSuccess = {this._onRetrieveAssetSuccess.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS events
    _onBlogEntryResponse(blogEntry) {
        console.log('_onBlogEntryResponse -> ', blogEntry);
        if(!this.props.onBlogEntryResponse) {
            return;
        }
        this.props.onBlogEntryResponse(blogEntry);
    }

    _onBlogEntryError(error) {
        console.log('_onBlogEntryError -> ', error);
        if(!this.props.onBlogEntryError) {
            return;
        }
        this.props.onBlogEntryError(error);
    }

    // Android events
    _onRetrieveAssetSuccess(assetEntry) {
        console.log('_onRetrieveAssetSuccess -> ', assetEntry);
        if(!this.props.onRetrieveAssetSuccess) {
            return;
        }
        this.props.onRetrieveAssetSuccess(assetEntry);
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}