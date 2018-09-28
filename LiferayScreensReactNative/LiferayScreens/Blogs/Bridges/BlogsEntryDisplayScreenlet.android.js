'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeBlogsEntryDisplayScreenlet = requireNativeComponent('BlogsEntryDisplayScreenlet');

export default class BlogsEntryDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            entryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
            theme: props.theme || ""
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onBlogsEntryDisplayScreenletRetrieveAssetSuccess', this.props.onRetrieveAssetSuccess);
        DeviceEventEmitter.addListener('onBlogsEntryDisplayScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeBlogsEntryDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}