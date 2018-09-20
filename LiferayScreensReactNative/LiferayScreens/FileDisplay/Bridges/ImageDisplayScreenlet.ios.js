'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeImageDisplayScreenlet = requireNativeComponent('ImageDisplayScreenlet');

export default class ImageDisplayScreenlet extends Component {
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
            <NativeImageDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}