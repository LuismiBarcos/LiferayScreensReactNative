'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeDDLListScreenlet = requireNativeComponent('DDLListScreenlet');

export default class DDLListScreenlet extends Component {
    constructor(props){
        super(props);
        
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            recordSetId: props.recordSetId || 0,
            userId: props.userId || 0,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            labelFields: props.labelFields || "",
            theme: props.theme || ""
        }
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onDDLListScreenletListPageFailed', this.props.onListPageFailed);
        DeviceEventEmitter.addListener('onDDLListScreenletListPageReceived', this.props.onListPageReceived);
        DeviceEventEmitter.addListener('onDDLListScreenletListItemSelected', this.props.onListItemSelected);
        DeviceEventEmitter.addListener('onDDLListScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeDDLListScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}