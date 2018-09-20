'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeBlogsEntryDisplayScreenlet = requireNativeComponent('BlogsEntryDisplayScreenlet');

export default class BlogsEntryDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.screenletAttributes = {
            assetEntryId: props.assetEntryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
            autoLoad: props.autoLoad || true
        }
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