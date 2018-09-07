'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeBlogsEntryDisplayScreenlet = requireNativeComponent('BlogsEntryDisplayScreenlet');

export default class BlogsEntryDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
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
                screenletAttributes={this.state}
                onBlogEntryResponse={this._onBlogEntryResponse.bind(this)}
                onBlogEntryError={this._onBlogEntryError.bind(this)}
            />
        );
    }

    // Events
    _onBlogEntryResponse(event) {
        if(!this.props.onBlogEntryResponse) {
            return;
        }
        this.props.onBlogEntryResponse(event.nativeEvent.blogEntry);
    }

    _onBlogEntryError(event) {
        if(!this.props.onBlogEntryError) {
            return;
        }
        this.props.onBlogEntryError(event.nativeEvent.error);
    }
}