'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeDDLFormScreenlet from './Bridges/DDLFormScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class DDLFormScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeDDLFormScreenlet 
                {...this.props}
                //iOS
                onFormLoaded={this.handleListener('onFormLoaded', 'record')} 
                onFormLoadError={this.handleListener('onFormLoadError', 'error')}
                onRecordLoaded={this.handleListener('onRecordLoaded', 'record')} 
                onRecordLoadError={this.handleListener('onRecordLoadError', 'error')}
                onFormSubmitted={this.handleListener('onFormSubmitted', 'record')}
                onFormSubmitError={this.handleListener('onFormSubmitError', 'error')}
                onDocumentFieldUploadStarted={this.handleListener('onDocumentFieldUploadStarted', 'field')}
                onUploadProgress={this.handleListener('onUploadProgress', 'field', 'bytes', 'totalBytes')}
                onUploadFinished={this.handleListener('onUploadFinished', 'field', 'result')}
                onUploadError={this.handleListener('onUploadError', 'error')}
                //Android
                onDDLFormLoaded={this.handleListener('onDDLFormLoaded', 'record')}
                onDDLFormRecordLoaded={this.handleListener('onDDLFormRecordLoaded', 'map')}
                onDDLFormRecordAdded={this.handleListener('onDDLFormRecordAdded', 'record')}
                onDDLFormRecordUpdated={this.handleListener('onDDLFormRecordUpdated', 'record')}
                onDDLFormDocumentUploaded={this.handleListener('onDDLFormDocumentUploaded', 'documentField')}
                onDDLFormDocumentUploadFailed={this.handleListener('onDDLFormDocumentUploadFailed', 'error')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}