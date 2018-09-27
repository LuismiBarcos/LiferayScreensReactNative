'use sctrict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeCommentDisplayScreenlet = requireNativeComponent('CommentDisplayScreenlet');

export default class CommentDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            commentId: props.commentId || 0,
            editable: props.editable || true,
            theme: props.theme || ""
        }
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onCommentDisplayScreenletLoadCommentSuccess', this.props.onLoadCommentSuccess);
        DeviceEventEmitter.addListener('onCommentDisplayScreenletDeleteCommentSuccess', this.props.onDeleteCommentSuccess);
        DeviceEventEmitter.addListener('onCommentDisplayScreenletUpdateCommentSuccess', this.props.onUpdateCommentSuccess);
        DeviceEventEmitter.addListener('onCommentDisplayScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render() {
        return(
            <NativeCommentDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}