'use strict'
import React, {Component} from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeImageGalleryScreenlet = requireNativeComponent('ImageGalleryScreenlet');

export default class ImageGalleryScreenlet extends Component {
    constructor(props){
        super(props);

        this.screenletAttributes = {
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageEntryDeleted', this.props.onImageEntryDeleted);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageUploadStarted', this.props.onImageUploadStarted);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageUploadProgress', this.props.onImageUploadProgress);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageUploadEnd', this.props.onImageUploadEnd);
        DeviceEventEmitter.addListener('onImageGalleryScreenletShowUploadImageView', this.props.onShowUploadImageView);
        DeviceEventEmitter.addListener('onImageGalleryScreenletListPageFailed', this.props.onListPageFailed);
        DeviceEventEmitter.addListener('onImageGalleryScreenletListPageReceived', this.props.onListPageReceived);
        DeviceEventEmitter.addListener('onImageGalleryScreenletItemSelected', this.props.onItemSelected);
        DeviceEventEmitter.addListener('onImageGalleryScreenletImageGalleryError', this.props.onImageGalleryError);
    }
    
    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeImageGalleryScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
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