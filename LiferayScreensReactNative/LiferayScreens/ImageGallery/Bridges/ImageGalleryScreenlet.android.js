'use strict'
import React, {Component} from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeImageGalleryScreenlet = requireNativeComponent('ImageGalleryScreenlet');

export default class ImageGalleryScreenlet extends Component {
    constructor(props){
        super(props);

        this.state = {
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }

        this._onImageEntryDeleted = this._onImageEntryDeleted.bind(this);
        this._onImageUploadStarted = this._onImageUploadStarted.bind(this);
        this._onImageUploadProgress = this._onImageUploadProgress.bind(this);
        this._onImageUploadEnd = this._onImageUploadEnd.bind(this);
        this._onShowUploadImageView = this._onShowUploadImageView.bind(this);
        this._onListPageFailed = this._onListPageFailed.bind(this);
        this._onListPageReceived = this._onListPageReceived.bind(this);
        this._onItemSelected = this._onItemSelected.bind(this);
        this._onImageGalleryError = this._onImageGalleryError.bind(this);
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageEntryDeleted', this._onImageEntryDeleted);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageUploadStarted', this._onImageUploadStarted);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageUploadProgress', this._onImageUploadProgress);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageUploadEnd', this._onImageUploadEnd);
        DeviceEventEmitter.addListener('onImageGalleryScreenletShowUploadImageView', this._onShowUploadImageView);
        DeviceEventEmitter.addListener('onImageGalleryScreenletListPageFailed', this._onListPageFailed);
        DeviceEventEmitter.addListener('onImageGalleryScreenletListPageReceived', this._onListPageReceived);
        DeviceEventEmitter.addListener('onImageGalleryScreenletItemSelected', this._onItemSelected);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageGalleryError', this._onImageGalleryError);
    }
    
    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeImageGalleryScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onImageEntryDeleted(event) {
        if(!this.props.onImageEntryDeleted) {
            return;
        }
        this.props.onImageEntryDeleted(event.l);
    }

    _onImageUploadStarted(event) {
        if(!this.props.onImageUploadStarted) {
            return;
        }
        this.props.onImageUploadStarted(event.uri, event.s, event.s1, event.s2);
    }

    _onImageUploadProgress(event) {
        if(!this.props.onImageUploadProgress) {
            return;
        }
        this.props.onImageUploadProgress(event.i, event.i1);
    }

    _onImageUploadEnd(event) {
        if(!this.props.onImageUploadEnd) {
            return;
        }
        this.props.onImageUploadEnd(event.imageEntry);
    }

    _onShowUploadImageView(event) {
        if(!this.props.onShowUploadImageView) {
            return;
        }
        this.props.onShowUploadImageView(event.imageView);
    }

    _onListPageFailed(event) {
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(event.error);
    }

    _onListPageReceived(event) {
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(JSON.parse(event.images));
    }

    _onItemSelected(event) {
        if(!this.props.onItemSelected) {
            return;
        }
        this.props.onItemSelected(JSON.parse(event.item));
    }

    _onImageGalleryError(event) {
        if(!this.props.onImageGalleryError) {
            return;
        }
        this.props.onImageGalleryError(event.error);
    }
}