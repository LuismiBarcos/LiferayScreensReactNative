'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeCommentListScreenlet = requireNativeComponent('CommentListScreenlet');

export default class CommentListScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.screenletAttributes = {
            className: props.className || "",
            classPK: props.classPK || 0,
            editable: props.editable || true,
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            theme: props.theme || ""
        }
    }
    render() {
        return(
            <NativeCommentListScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}