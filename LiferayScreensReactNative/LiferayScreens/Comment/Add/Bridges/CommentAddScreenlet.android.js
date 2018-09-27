'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeCommentAddScreenlet = requireNativeComponent('CommentAddScreenlet');

export default class CommentAddScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            className: props.className || "",
            classPK: props.classPK || 0,
            theme: props.theme || ""
        }
    }

    componentWillMount(){
        // Events
        DeviceEventEmitter.addListener('onCommentAddScreenletAddCommentSuccess', this.props.onAddCommentSuccess);
        DeviceEventEmitter.addListener('onCommentAddScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
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