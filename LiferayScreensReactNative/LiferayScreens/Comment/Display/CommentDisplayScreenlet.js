'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeCommentDisplayScreenlet from './Bridges/CommentDisplayScreenlet';

export default class CommentDisplayScreenlet extends Component {
    render(){
        return(
            <NativeCommentDisplayScreenlet 
                {...this.props}
                // iOS events
                onCommentLoaded={this._onCommentLoaded.bind(this)}
                onLoadCommentError={this._onLoadCommentError.bind(this)}
                onCommentDeleted={this._onCommentDeleted.bind(this)}
                onDeleteComment={this._onDeleteComment.bind(this)}
                onCommentUpdated={this._onCommentUpdated.bind(this)}
                onUpdateComment={this._onUpdateComment.bind(this)}
                // Android events
                onLoadCommentSuccess = {this._onLoadCommentSuccess.bind(this)}
                onDeleteCommentSuccess = {this._onDeleteCommentSuccess.bind(this)}
                onUpdateCommentSuccess = {this._onUpdateCommentSuccess.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS Events
    _onCommentLoaded(comment) {
        console.log('_onCommentLoaded -> ', comment);
        if(!this.props.onCommentLoaded) {
            return;
        }
        this.props.onCommentLoaded(comment)
    }

    _onLoadCommentError(error) {
        console.log('_onLoadCommentError -> ', error);
        if(!this.props.onLoadCommentError) {
            return;
        }
        this.props.onLoadCommentError(error)
    }
    
    _onCommentDeleted(comment) {
        console.log('_onCommentDeleted -> ', comment);
        if(!this.props.onCommentDeleted) {
            return;
        }
        this.props.onCommentDeleted(comment)
    }
    
    _onDeleteComment(comment, error) {
        console.log('_onDeleteComment -> ', comment, error);
        if(!this.props.onDeleteComment) {
            return;
        }
        this.props.onDeleteComment(comment, error)
    }
    
    _onCommentUpdated(comment) {
        console.log('_onCommentUpdated -> ', comment);
        if(!this.props.onCommentUpdated) {
            return;
        }
        this.props.onCommentUpdated(comment)
    }
    
    _onUpdateComment(comment, error) {
        console.log('_onUpdateComment -> ', comment, error);
        if(!this.props.onUpdateComment) {
            return;
        }
        this.props.onUpdateComment(comment, error);
    }

    // Android events
    _onLoadCommentSuccess(comment) {
        console.log('_onLoadCommentSuccess -> ', comment);
        if(!this.props.onLoadCommentSuccess) {
            return;
        }
        this.props.onLoadCommentSuccess(comment);
    }

    _onDeleteCommentSuccess(comment) {
        console.log('_onDeleteCommentSuccess -> ', comment);
        if(!this.props.onDeleteCommentSuccess) {
            return;
        }
        this.props.onDeleteCommentSuccess(comment);
    }

    _onUpdateCommentSuccess(comment) {
        console.log('_onUpdateCommentSuccess -> ', comment);
        if(!this.props.onUpdateCommentSuccess) {
            return;
        }
        this.props.onUpdateCommentSuccess(comment);
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}

