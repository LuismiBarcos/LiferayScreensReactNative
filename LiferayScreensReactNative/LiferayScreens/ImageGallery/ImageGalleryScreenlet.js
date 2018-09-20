'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeImageGalleryScreenlet from './Bridges/ImageGalleryScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class ImageGalleryScreenlet extends BaseScreenlet {
    render() {
        return (
            <NativeImageGalleryScreenlet 
                {...this.props}
                // Common events
                onItemSelected={this.handleListener('onItemSelected', 'image')}
                // iOS events
                onContentsReceived={this.handleListener('onContentsReceived', 'images')}
                onGalleryError={this.handleListener('onGalleryError', 'error')}
                onImageEntryDeleted={this.handleListener('onImageEntryDeleted', 'image')}
                onImageEntryDeleteError={this.handleListener('onImageEntryDeleteError', 'error')}
                onImageUploadStart={this.handleListener('onImageUploadStart', 'image')}
                onImageUploadProgress={this.handleListener('onImageUploadProgress', 'totalBytesSent', 'totalBytesToSend')}
                onImageUploadError={this.handleListener('onImageUploadError', 'error')}
                onImageUploaded={this.handleListener('onImageUploaded', 'image')}
                onImageUploadDetailViewCreated={this.handleListener('onImageUploadDetailViewCreated', 'view')}
                // Android events
                onListPageFailed={this.handleListener('onListPageFailed', 'error')}
                onListPageReceived={this.handleListener('onListPageReceived', 'images')}
                onImageGalleryError={this.handleListener('onImageGalleryError', 'error')}
                // There are more events in Android. For now we not handle them
            />
        );
    }    
}
