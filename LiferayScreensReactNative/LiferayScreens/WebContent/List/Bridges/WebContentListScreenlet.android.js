'use strict'
import React, {Component} from 'react';
import { requireNativeComponent} from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeWebContentListScreenlet = requireNativeComponent('WebContentListScreenlet');

export default class WebContentListScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            folderId: props.folderId || 0,
            groupId: props.groupId || 0,
            labelFields: props.labelFields || "",
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            theme: props.theme || ""
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onWebContentListScreenletListPageFailed', this.props.onListPageFailed);
        DeviceEventEmitter.addListener('onWebContentListScreenletListPageReceived', this.props.onListPageReceived);
        DeviceEventEmitter.addListener('onWebContentListScreenletListItemSelected', this.props.onListItemSelected);
        DeviceEventEmitter.addListener('onWebContentListScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render() {
        return(
            <NativeWebContentListScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}