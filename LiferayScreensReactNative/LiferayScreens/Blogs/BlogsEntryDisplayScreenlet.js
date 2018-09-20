'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeBlogsEntryDisplayScreenlet from './Bridges/BlogsEntryDisplayScreenlet';
import BaseScreenlet from '../Base/BaseScreenlet';

export default class BlogsEntryDisplayScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeBlogsEntryDisplayScreenlet 
                {...this.props}
                //iOS events
                onBlogEntryResponse={this.handleListener('onBlogEntryResponse', 'blogEntry')}
                onBlogEntryError={this.handleListener('onBlogEntryResponse', 'error')}
                // Android events
                onRetrieveAssetSuccess={this.handleListener('onBlogEntryResponse', 'assetEntry')}
                onError={this.handleListener('onBlogEntryResponse', 'error')}
            />
        );
    }
}