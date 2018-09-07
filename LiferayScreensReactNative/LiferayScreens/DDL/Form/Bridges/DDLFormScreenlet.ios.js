'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeDDLFormScreenlet = requireNativeComponent('DDLFormScreenlet');

export default class DDLFormScreenlet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            structureId: props.structureId || 0,
            groupId: props.groupId || 0,
            recordSetId: props.recordSetId || 0,
            recordId: props.recordId || 0,
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            autoscrollOnValidation: props.autoscrollOnValidation || true,
            showSubmitButton: props.showSubmitButton || true,
            editable: props.editable || true
        }
    }

    render(){
        return(
            <NativeDDLFormScreenlet 
                {...this.props}
                screenletAttributes={this.state}
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
            />
        );
    }

    // Events
    _onFormLoaded(event) {
        if(!this.props.onFormLoaded){
            return;
        }
        this.props.onFormLoaded(event.nativeEvent.record)
    }

    _onFormLoadError(event) {
        if(!this.props.onFormLoadError){
            return;
        }
        this.props.onFormLoadError(event.nativeEvent.error)
    }

    _onRecordLoaded(event) {
        if(!this.props.onRecordLoaded){
            return;
        }
        this.props.onRecordLoaded(event.nativeEvent.record)
    }

    _onRecordLoadError(event) {
        if(!this.props.onRecordLoadError){
            return;
        }
        this.props.onRecordLoadError(event.nativeEvent.error)
    }

    _onFormSubmitted(event) {
        if(!this.props.onFormSubmitted){
            return;
        }
        this.props.onFormSubmitted(event.nativeEvent.record)
    }

    _onFormSubmitError(event) {
        if(!this.props.onFormSubmitError){
            return;
        }
        this.props.onFormSubmitError(event.nativeEvent.error)
    }

    _onDocumentFieldUploadStarted(event) {
        if(!this.props.onDocumentFieldUploadStarted){
            return;
        }
        this.props.onDocumentFieldUploadStarted(event.nativeEvent.field)
    }

    _onUploadProgress(event) {
        if(!this.props.onUploadProgress){
            return;
        }
        this.props.onUploadProgress(event.nativeEvent.field, event.nativeEvent.bytes, event.nativeEvent.totalBytes)
    }

    _onUploadFinished(event) {
        if(!this.props.onUploadFinished){
            return;
        }
        this.props.onUploadFinished(event.nativeEvent.field, event.nativeEvent.result)
    }

    _onUploadError(event) {
        if(!this.props.onUploadError){
            return;
        }
        this.props.onUploadError(event.nativeEvent.error);
    }
}