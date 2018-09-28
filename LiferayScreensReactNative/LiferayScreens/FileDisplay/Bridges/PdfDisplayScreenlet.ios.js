'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativePdfDisplayScreenlet = requireNativeComponent('PdfDisplayScreenlet');

export default class PdfDisplayScreenlet extends Component {
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
            <NativePdfDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}