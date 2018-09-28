'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeVideoDisplayScreenlet = requireNativeComponent('VideoDisplayScreenlet');

export default class VideoDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.screenletAttributes = {
            assetEntryId: props.entryId || 0,
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
            theme: props.theme || ""
        }
    }
    render(){
        return(
            <NativeVideoDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}