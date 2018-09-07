'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeImageGalleryScreenlet from './Bridges/ImageGalleryScreenlet'

export default class ImageGalleryScreenlet extends Component {
    render() {
        return (
            <NativeImageGalleryScreenlet 
                {...this.props}
                // Common events
                onItemSelected={this._onItemSelected.bind(this)}
                // iOS events
                onContentsReceived={this._onContentsReceived.bind(this)}
                onGalleryError={this._onGalleryError.bind(this)}
                // Android events
                onListPageFailed = {this._onListPageFailed.bind(this)}
                onListPageReceived = {this._onListPageReceived.bind(this)}
                onImageGalleryError = {this._onImageGalleryError.bind(this)}
            />
        );
    }

    // Common events
    _onItemSelected(image){
        console.log('_onItemSelected -> ', image);
        if(!this.props.onItemSelected){
            return;
        }
        this.props.onItemSelected(image)
    }

    // iOS Events
    _onContentsReceived(images) {
        console.log('_onContentsReceived -> ', images);
        if(!this.props.onContentsReceived) {
            return;
        }
        this.props.onContentsReceived(images)
    }


    _onGalleryError(error) {
        console.log('_onGalleryError -> ', error);
        if(!this.props.onGalleryError){
            return;
        }
        this.props.onGalleryError(error)
    }

    _onImageEntryDeleted(image) {
        console.log('_onImageEntryDeleted -> ', image);
        if(!this.props.onImageEntryDeleted) {
            return;
        }
        this.props.onImageEntryDeleted(image)
    }


    _onImageEntryDeleteError(error) {
        console.log('_onImageEntryDeleteError -> ', error);
        if(!this.props.onImageEntryDeleteError){
            return;
        }
        this.props.onImageEntryDeleteError(error)
    }

    _onImageUploadStart(image){
        console.log('_onImageUploadStart -> ', image);
        if(!this.props.onImageUploadStart){
            return;
        }
        this.props.onImageUploadStart(image)
    }
    
    _onImageUploadProgress(totalBytesSent, totalBytesToSend) {
        console.log('_onImageUploadProgress -> ', totalBytesSent, totalBytesToSend);
        if(!this.props.onImageUploadProgress) {
            return;
        }
        this.props.onImageUploadProgress(totalBytesSent, totalBytesToSend)
    }


    _onImageUploadError(error) {
        console.log('_onImageUploadError -> ', error);
        if(!this.props.onImageUploadError){
            return;
        }
        this.props.onImageUploadError(error)
    }

    _onImageUploaded(image){
        console.log('_onImageUploaded -> ', image);
        if(!this.props.onImageUploaded){
            return;
        }
        this.props.onImageUploaded(image)
    }

    _onImageUploadDetailViewCreated(view) {
        console.log('_onImageUploadDetailViewCreated -> ', view);
        if(!this.props.onImageUploadDetailViewCreated) {
            return;
        }
        this.props.onImageUploadDetailViewCreated(view)
    }

    // Android events
    _onImageEntryDeleted(l) {
        console.log('_onImageEntryDeleted -> ', l);
        if(!this.props.onImageEntryDeleted) {
            return;
        }
        this.props.onImageEntryDeleted(l);
    }

    _onImageUploadStarted(uri, s, s1, s2) {
        console.log('_onImageUploadStarted -> ', uri, s, s1, s2);
        if(!this.props.onImageUploadStarted) {
            return;
        }
        this.props.onImageUploadStarted(uri, s, s1, s2);
    }

    _onImageUploadProgress(i, i1) {
        console.log('_onImageUploadProgress -> ', i, i1);
        if(!this.props.onImageUploadProgress) {
            return;
        }
        this.props.onImageUploadProgress(i, i1);
    }

    _onImageUploadEnd(imageEntry) {
        console.log('_onImageUploadEnd -> ', imageEntry);
        if(!this.props.onImageUploadEnd) {
            return;
        }
        this.props.onImageUploadEnd(imageEntry);
    }

    _onShowUploadImageView(imageView) {
        console.log('_onShowUploadImageView -> ', imageView);
        if(!this.props.onShowUploadImageView) {
            return;
        }
        this.props.onShowUploadImageView(imageView);
    }

    _onListPageFailed(error) {
        console.log('_onListPageFailed -> ', error);
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(error);
    }

    _onListPageReceived(images) {
        console.log('_onListPageReceived -> ', images);
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(images);
    }

    _onImageGalleryError(error) {
        console.log('_onImageGalleryError -> ', error);
        if(!this.props.onImageGalleryError) {
            return;
        }
        this.props.onImageGalleryError(error);
    }
}
