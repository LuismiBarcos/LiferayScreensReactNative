'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeCommentAddScreenlet = requireNativeComponent('CommentAddScreenlet');

export default class CommentAddScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            className: props.className || "",
            classPK: props.classPK || 0,
        }
    }
    render(){
        return(
            <NativeCommentAddScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}