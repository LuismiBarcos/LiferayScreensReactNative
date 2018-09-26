'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeDDLListScreenlet = requireNativeComponent('DDLListScreenlet');

export default class DDLListScreenlet extends Component {
    constructor(props) {
        super(props)

        this.screenletAttributes = {
            recordSetId: props.recordSetId || 0,
            userId: props.userId || 0,
            labelFields: props.labelFields || "",
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            theme: props.theme || ""
        }
    }
    render() {
        return(
            <NativeDDLListScreenlet
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}