'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeAudioDisplayScreenlet = requireNativeComponent('AudioDisplayScreenlet');

export default class AudioDisplayScreenlet extends Component {
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
            <NativeAudioDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}