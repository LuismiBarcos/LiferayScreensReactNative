'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeCommentDisplayScreenlet = requireNativeComponent('CommentDisplayScreenlet');

export default class CommentDisplayScreenlet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentId: props.commentId || 0,
            autoLoad: props.autoLoad || true,
            editable: props.editable || true
        }
    }
    render(){
        return(
            <NativeCommentDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.state}
                onCommentLoaded={this._onCommentLoaded.bind(this)}
                onLoadCommentError={this._onLoadCommentError.bind(this)}
                onCommentDeleted={this._onCommentDeleted.bind(this)}
                onDeleteComment={this._onDeleteComment.bind(this)}
                onCommentUpdated={this._onCommentUpdated.bind(this)}
                onUpdateComment={this._onUpdateComment.bind(this)}
            />
        );
    }

    // Events
    _onCommentLoaded(event) {
        if(!this.props.onCommentLoaded) {
            return;
        }
        this.props.onCommentLoaded(event.nativeEvent.comment)
    }

    _onLoadCommentError(event) {
        if(!this.props.onLoadCommentError) {
            return;
        }
        this.props.onLoadCommentError(event.nativeEvent.error)
    }
    
    _onCommentDeleted(event) {
        if(!this.props.onCommentDeleted) {
            return;
        }
        this.props.onCommentDeleted(event.nativeEvent.comment)
    }
    
    _onDeleteComment(event) {
        if(!this.props.onDeleteComment) {
            return;
        }
        this.props.onDeleteComment(event.nativeEvent.comment, event.nativeEvent.error)
    }
    
    _onCommentUpdated(event) {
        if(!this.props.onCommentUpdated) {
            return;
        }
        this.props.onCommentUpdated(event.nativeEvent.comment)
    }
    
    _onUpdateComment(event) {
        if(!this.props.onUpdateComment) {
            return;
        }
        this.props.onUpdateComment(event.nativeEvent.comment, event.nativeEvent.error)
    }
}