'use sctrict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeCommentDisplayScreenlet = requireNativeComponent('CommentDisplayScreenlet');

export default class CommentDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentId: props.commentId || 0,
            editable: props.editable || true
        }
        this._onLoadCommentSuccess = this._onLoadCommentSuccess.bind(this);
        this._onDeleteCommentSuccess = this._onDeleteCommentSuccess.bind(this);
        this._onUpdateCommentSuccess = this._onUpdateCommentSuccess.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onCommentDisplayScreenletLoadCommentSuccess', this._onLoadCommentSuccess);
        DeviceEventEmitter.addListener('onCommentDisplayScreenletDeleteCommentSuccess', this._onDeleteCommentSuccess);
        DeviceEventEmitter.addListener('onCommentDisplayScreenletUpdateCommentSuccess', this._onUpdateCommentSuccess);
        DeviceEventEmitter.addListener('onCommentDisplayScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render() {
        return(
            <NativeCommentDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onLoadCommentSuccess(event) {
        if(!this.props.onLoadCommentSuccess) {
            return;
        }
        this.props.onLoadCommentSuccess(JSON.parse(event.comment));
    }

    _onDeleteCommentSuccess(event) {
        if(!this.props.onDeleteCommentSuccess) {
            return;
        }
        this.props.onDeleteCommentSuccess(JSON.parse(event.comment));
    }

    _onUpdateCommentSuccess(event) {
        if(!this.props.onUpdateCommentSuccess) {
            return;
        }
        this.props.onUpdateCommentSuccess(JSON.parse(event.comment));
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}