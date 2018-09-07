'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeDDLFormScreenlet from './Bridges/DDLFormScreenlet';

export default class DDLFormScreenlet extends Component {
    render(){
        return(
            <NativeDDLFormScreenlet 
                {...this.props}
                //iOS
                onFormLoaded={this._onFormLoaded.bind(this)} 
                onFormLoadError={this._onFormLoadError.bind(this)}
                onRecordLoaded={this._onRecordLoaded.bind(this)} 
                onRecordLoadError={this._onRecordLoadError.bind(this)}
                onFormSubmitted={this._onFormSubmitted.bind(this)} 
                onFormSubmitError={this._onFormSubmitError.bind(this)} 
                onDocumentFieldUploadStarted={this._onDocumentFieldUploadStarted.bind(this)} 
                onUploadProgress={this._onUploadProgress.bind(this)} 
                onUploadFinished={this._onUploadFinished.bind(this)} 
                onUploadError={this._onUploadError.bind(this)}
                //Android
                onDDLFormLoaded = {this._onDDLFormLoaded.bind(this)}
                onDDLFormRecordLoaded = {this._onDDLFormRecordLoaded.bind(this)}
                onDDLFormRecordAdded = {this._onDDLFormRecordAdded.bind(this)}
                onDDLFormRecordUpdated ={this._onDDLFormRecordUpdated.bind(this)}
                onDDLFormDocumentUploaded = {this._onDDLFormDocumentUploaded.bind(this)}
                onDDLFormDocumentUploadFailed = {this._onDDLFormDocumentUploadFailed.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS Events
    _onFormLoaded(record) {
        console.log('_onFormLoaded -> ', record);
        if(!this.props.onFormLoaded){
            return;
        }
        this.props.onFormLoaded(record)
    }

    _onFormLoadError(error) {
        console.log('_onFormLoadError -> ', error)
        if(!this.props._onFormLoadError){
            return;
        }
        this.props._onFormLoadError(error)
    }

    _onRecordLoaded(record) {
        console.log('_onRecordLoaded -> ', record)
        if(!this.props.onRecordLoaded){
            return;
        }
        this.props.onRecordLoaded(record)
    }

    _onRecordLoadError(error) {
        console.log('_onRecordLoadError -> ', error)
        if(!this.props.onRecordLoadError){
            return;
        }
        this.props.onRecordLoadError(error)
    }

    _onFormSubmitted(record) {
        console.log('_onFormSubmitted -> ', record)
        if(!this.props.onFormSubmitted){
            return;
        }
        this.props.onFormSubmitted(record)
    }

    _onFormSubmitError(error) {
        console.log('_onFormSubmitError -> ', error)
        if(!this.props.onFormSubmitError){
            return;
        }
        this.props.onFormSubmitError(error)
    }

    _onDocumentFieldUploadStarted(field) {
        console.log('_onDocumentFieldUploadStarted -> ', field)
        if(!this.props.onDocumentFieldUploadStarted){
            return;
        }
        this.props.onDocumentFieldUploadStarted(field)
    }

    _onUploadProgress(field, bytes, totalBytes) {
        console.log('_onUploadProgress -> ', field, bytes, totalBytes);
        if(!this.props.onUploadProgress){
            return;
        }
        this.props.onUploadProgress(field, bytes, totalBytes)
    }

    _onUploadFinished(field, result) {
        console.log('_onUploadFinished -> ', field, result);
        if(!this.props.onUploadFinished){
            return;
        }
        this.props.onUploadFinished(field, result)
    }

    _onUploadError(error) {
        console.log('_onUploadError -> ', error)
        if(!this.props.onUploadError){
            return;
        }
        this.props.onUploadError(error);
    }

    // Android events
    _onDDLFormLoaded(record) {
        console.log('_onDDLFormLoaded -> ', record)
        if(!this.props.onDDLFormLoaded) {
            return;
        }
        this.props.onDDLFormLoaded(record);
    }

    _onDDLFormRecordLoaded(map) {
        console.log('onDDLFormRecordLoaded -> ', map)
        if(!this.props.onDDLFormRecordLoaded) {
            return;
        }
        this.props.onDDLFormRecordLoaded(map);
    }

    _onDDLFormRecordAdded(record) {
        console.log('_onDDLFormRecordAdded -> ', record)
        if(!this.props.onDDLFormRecordAdded) {
            return;
        }
        this.props.onDDLFormRecordAdded(record);
    }

    _onDDLFormRecordUpdated(record) {
        console.log('_onDDLFormRecordUpdated -> ', record)
        if(!this.props.onDDLFormRecordUpdated) {
            return;
        }
        this.props.onDDLFormRecordUpdated(record);
    }

    _onDDLFormDocumentUploaded(documentField) {
        console.log('_onDDLFormDocumentUploaded -> ', documentField)
        if(!this.props.onDDLFormDocumentUploaded) {
            return;
        }
        this.props.onDDLFormDocumentUploaded(documentField);
    }

    _onDDLFormDocumentUploadFailed(error) {
        console.log('_onDDLFormDocumentUploadFailed -> ', error)
        if(!this.props.onDDLFormDocumentUploadFailed) {
            return;
        }
        this.props.onDDLFormDocumentUploadFailed(error);
    }

    _onError(error) {
        console.log('_onError -> ', error)
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}