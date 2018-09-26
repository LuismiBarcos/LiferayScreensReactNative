'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeDDLFormScreenlet = requireNativeComponent('DDLFormScreenlet');

export default class DDLFormScreenlet extends Component {
    constructor(props) {
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
            showSubmitButton: props.showSubmitButton || true,
            editable: props.editable || true,
            theme: props.theme || ""
        }
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