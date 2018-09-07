'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeDDLFormScreenlet = requireNativeComponent('DDLFormScreenlet');

export default class DDLFormScreenlet extends Component {
    constructor(props){
        super(props);

        this.state = {
            structureId: props.structureId || 0,
            groupId: props.groupId || 0,
            recordSetId: props.recordSetId || 0,
            recordId: props.recordId || 0,
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            autoscrollOnValidation: props.autoscrollOnValidation || true
        }

        this._onDDLFormLoaded = this._onDDLFormLoaded.bind(this);
        this._onDDLFormRecordLoaded = this._onDDLFormRecordLoaded.bind(this);
        this._onDDLFormRecordAdded = this._onDDLFormRecordAdded.bind(this);
        this._onDDLFormRecordUpdated =this._onDDLFormRecordUpdated.bind(this);
        this._onDDLFormDocumentUploaded = this._onDDLFormDocumentUploaded.bind(this);
        this._onDDLFormDocumentUploadFailed = this._onDDLFormDocumentUploadFailed.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onDDLFormScreenletLoaded', this._onDDLFormLoaded);
        DeviceEventEmitter.addListener('onDDLFormScreenletRecordLoaded', this._onDDLFormRecordLoaded);
        DeviceEventEmitter.addListener('onDDLFormScreenletRecordAdded', this._onDDLFormRecordAdded);
        DeviceEventEmitter.addListener('onDDLFormScreenletRecordUpdated', this._onDDLFormRecordUpdated);
        DeviceEventEmitter.addListener('onDDLFormScreenletDocumentUploaded', this._onDDLFormDocumentUploaded);
        DeviceEventEmitter.addListener('onDDLFormScreenletDocumentUploadFailed', this._onDDLFormDocumentUploadFailed);
        DeviceEventEmitter.addListener('onDDLFormScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeDDLFormScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events

    _onDDLFormLoaded(event) {
        if(!this.props.onDDLFormLoaded) {
            return;
        }
        this.props.onDDLFormLoaded(JSON.parse(event.record));
    }

    _onDDLFormRecordLoaded(event) {
        if(!this.props.onDDLFormRecordLoaded) {
            return;
        }
        this.props.onDDLFormRecordLoaded(JSON.parse(event.map));
    }

    _onDDLFormRecordAdded(event) {
        if(!this.props.onDDLFormRecordAdded) {
            return;
        }
        this.props.onDDLFormRecordAdded(JSON.parse(event.record));
    }

    _onDDLFormRecordUpdated(event) {
        if(!this.props.onDDLFormRecordUpdated) {
            return;
        }
        this.props.onDDLFormRecordUpdated(JSON.parse(event.record));
    }

    _onDDLFormDocumentUploaded(event) {
        if(!this.props.onDDLFormDocumentUploaded) {
            return;
        }
        this.props.onDDLFormDocumentUploaded(JSON.parse(event.documentField));
    }

    _onDDLFormDocumentUploadFailed(event) {
        if(!this.props.onDDLFormDocumentUploadFailed) {
            return;
        }
        this.props.onDDLFormDocumentUploadFailed(event.error);
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}