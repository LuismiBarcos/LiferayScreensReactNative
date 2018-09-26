'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeDDLFormScreenlet = requireNativeComponent('DDLFormScreenlet');

export default class DDLFormScreenlet extends Component {
    constructor(props){
        super(props);

        this.screenletAttributes = {
            structureId: props.structureId || 0,
            groupId: props.groupId || 0,
            recordSetId: props.recordSetId || 0,
            recordId: props.recordId || 0,
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            autoscrollOnValidation: props.autoscrollOnValidation || true,
            theme: props.theme || ""
        }
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onDDLFormScreenletLoaded', this.props.onDDLFormLoaded);
        DeviceEventEmitter.addListener('onDDLFormScreenletRecordLoaded', this.props.onDDLFormRecordLoaded);
        DeviceEventEmitter.addListener('onDDLFormScreenletRecordAdded', this.props.onDDLFormRecordAdded);
        DeviceEventEmitter.addListener('onDDLFormScreenletRecordUpdated', this.props.onDDLFormRecordUpdated);
        DeviceEventEmitter.addListener('onDDLFormScreenletDocumentUploaded', this.props.onDDLFormDocumentUploaded);
        DeviceEventEmitter.addListener('onDDLFormScreenletDocumentUploadFailed', this.props.onDDLFormDocumentUploadFailed);
        DeviceEventEmitter.addListener('onDDLFormScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeDDLFormScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}