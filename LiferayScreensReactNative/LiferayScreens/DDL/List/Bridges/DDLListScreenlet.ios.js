'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeDDLListScreenlet = requireNativeComponent('DDLListScreenlet');

export default class DDLListScreenlet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recordSetId: props.recordSetId || 0,
            userId: props.userId || 0,
            labelFields: props.labelFields || "",
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
        }
    }
    render() {
        return(
            <NativeDDLListScreenlet
                {...this.props}
                screenletAttributes={this.state}
                onDDLListResponseRecords={this._onDDLListResponseRecords.bind(this)}
                onDDLListError={this._onDDLListError.bind(this)}
                onDDLSelectedRecord={this._onDDLSelectedRecord.bind(this)}
            />
        );
    }

    // Events
    _onDDLListResponseRecords(event) {
        if(!this.props.onDDLListResponseRecords) {
            return;
        }
        this.props.onDDLListResponseRecords(event.nativeEvent.records);
    }

    _onDDLListError(event) {
        if(!this.props.onDDLListError) {
            return;
        }
        this.props.onDDLListError(event.nativeEvent.error);
    }

    _onDDLSelectedRecord(event) {
        if(!this.props.onDDLSelectedRecord) {
            return;
        }
        this.props.onDDLSelectedRecord(event.nativeEvent.record);
    }
}