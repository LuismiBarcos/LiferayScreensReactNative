'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeFileDisplayScreenlet = requireNativeComponent('FileDisplayScreenlet');

export default class FileDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.screenletAttributes = {
            assetEntryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
        }
    }
    render(){
        return(
            <NativeFileDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }

    // Events
    _onFileAssetResponse(event) {
        if(!this.props.onFileAssetResponse) {
            return;
        }
        this.props.onFileAssetResponse(event.nativeEvent.url)
    }

    _onFileAssetError(event) {
        if(!this.props.onFileAssetError) {
            return;
        }
        this.props.onFileAssetError(event.nativeEvent.error)
    }
}