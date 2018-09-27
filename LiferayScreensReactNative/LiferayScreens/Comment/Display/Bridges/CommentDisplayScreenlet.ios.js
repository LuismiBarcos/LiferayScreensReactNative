'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeCommentDisplayScreenlet = requireNativeComponent('CommentDisplayScreenlet');

export default class CommentDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.screenletAttributes = {
            commentId: props.commentId || 0,
            autoLoad: props.autoLoad || true,
            editable: props.editable || true,
            theme: props.theme || ""
        }
    }
    render(){
        return(
            <NativeCommentDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}