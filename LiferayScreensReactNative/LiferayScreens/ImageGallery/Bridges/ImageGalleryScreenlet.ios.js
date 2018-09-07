'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeImageGalleryScreenlet = requireNativeComponent('ImageGalleryScreenlet');

export default class ImageGalleryScreenlet extends Component {
    constructor(props){
        super(props);

        this.state = {
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }
    }

    render() {
        return (
            <NativeImageGalleryScreenlet 
                {... this.props}
                style={this.props.style}
                screenletAttributes={this.state}
                onContentsReceived={this._onContentsReceived.bind(this)}
                onGalleryError={this._onGalleryError.bind(this)}
                onItemSelected={this._onItemSelected.bind(this)}
                onImageEntryDeleted={this._onImageEntryDeleted.bind(this)}
                onImageEntryDeleteError={this._onImageEntryDeleteError.bind(this)}
                onImageUploadStart={this._onImageUploadStart.bind(this)}
                onImageUploadProgress={this._onImageUploadProgress.bind(this)}
                onImageUploadError={this._onImageUploadError.bind(this)}
                onImageUploaded={this._onImageUploaded.bind(this)}
                onImageUploadDetailViewCreated={this._onImageUploadDetailViewCreated.bind(this)}
            />
        );
    }

    // Events
    _onContentsReceived(event) {
        if(!this.props.onContentsReceived) {
            return;
        }
        this.props.onContentsReceived(event.nativeEvent.images)
    }


    _onGalleryError(event) {
        if(!this.props.onGalleryError){
            return;
        }
        this.props.onGalleryError(event.nativeEvent.error)
    }

    _onItemSelected(event){
        if(!this.props.onItemSelected){
            return;
        }
        this.props.onItemSelected(event.nativeEvent.image)
    }

    _onImageEntryDeleted(event) {
        if(!this.props.onImageEntryDeleted) {
            return;
        }
        this.props.onImageEntryDeleted(event.nativeEvent.image)
    }


    _onImageEntryDeleteError(event) {
        if(!this.props.onImageEntryDeleteError){
            return;
        }
        this.props.onImageEntryDeleteError(event.nativeEvent.error)
    }

    _onImageUploadStart(event){
        if(!this.props.onImageUploadStart){
            return;
        }
        this.props.onImageUploadStart(event.nativeEvent.image)
    }
    
    _onImageUploadProgress(event) {
        if(!this.props.onImageUploadProgress) {
            return;
        }
        this.props.onImageUploadProgress(event.nativeEvent.totalBytesSent, event.nativeEvent.totalBytesToSend)
    }


    _onImageUploadError(event) {
        if(!this.props.onImageUploadError){
            return;
        }
        this.props.onImageUploadError(event.nativeEvent.error)
    }

    _onImageUploaded(event){
        if(!this.props.onImageUploaded){
            return;
        }
        this.props.onImageUploaded(event.nativeEvent.image)
    }

    _onImageUploadDetailViewCreated(event) {
        if(!this.props.onImageUploadDetailViewCreated) {
            return;
        }
        this.props.onImageUploadDetailViewCreated(event.nativeEvent.view)
    }
}
