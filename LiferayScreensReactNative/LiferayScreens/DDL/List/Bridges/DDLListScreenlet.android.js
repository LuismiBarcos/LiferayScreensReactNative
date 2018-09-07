'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeDDLListScreenlet = requireNativeComponent('DDLListScreenlet');

export default class DDLListScreenlet extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            autoLoad: props.autoLoad || true,
            recordSetId: props.recordSetId || 0,
            userId: props.userId || 0,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            labelFields: props.labelFields || ""
        }
        
        this._onListPageFailed = this._onListPageFailed.bind(this);
        this._onListPageReceived = this._onListPageReceived.bind(this);
        this._onListItemSelected = this._onListItemSelected.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onDDLListScreenletListPageFailed', this._onListPageFailed);
        DeviceEventEmitter.addListener('onDDLListScreenletListPageReceived', this._onListPageReceived);
        DeviceEventEmitter.addListener('onDDLListScreenletListItemSelected', this._onListItemSelected);
        DeviceEventEmitter.addListener('onDDLListScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeDDLListScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onListPageFailed(event) {
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(event.pageNumber, event.error);
    }

    _onListPageReceived(event) {
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(event.list);
    }

    _onListItemSelected(event) {
        if(!this.props.onListItemSelected) {
            return;
        }
        this.props.onListItemSelected(event.itemSelected);
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}