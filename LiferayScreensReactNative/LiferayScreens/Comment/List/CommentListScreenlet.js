'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeCommentListScreenlet from './Bridges/CommentListScreenlet';

export default class CommentListScreenlet extends Component {
    render() {
        return(
            <NativeCommentListScreenlet 
                {...this.props}
                // iOS events
                onListResponseComments={this._onListResponseComments.bind(this)}
                onCommentListError={this._onCommentListError.bind(this)}
                onSelectedComment={this._onSelectedComment.bind(this)}
                onDeletedComment={this._onDeletedComment.bind(this)}
                onCommentDelete={this._onCommentDelete.bind(this)}
                onUpdatedComment={this._onUpdatedComment.bind(this)}
                onCommentUpdate={this._onCommentUpdate.bind(this)}
                // Android events
                onDeleteCommentSuccess = {this._onDeleteCommentSuccess.bind(this)}
                onUpdateCommentSuccess = {this._onUpdateCommentSuccess.bind(this)}
                onListPageFailed = {this._onListPageFailed.bind(this)}
                onListPageReceived = {this._onListPageReceived.bind(this)}
                onListItemSelected = {this._onListItemSelected.bind(this)}
                onError = {this._onError.bind(this)}
            />
        );
    }

    // iOS events
    _onListResponseComments(comment){
        console.log('_onListResponseComments ->', comment);
        if(!this.props.onListResponseComments) {
            return;
        }
        this.props.onListResponseComments(comment)
    }

    _onCommentListError(error){
        console.log('_onCommentListError ->', error);
        if(!this.props.onCommentListError) {
            return;
        }
        this.props.onCommentListError(error)
    }

    _onSelectedComment(comment){
        console.log('_onSelectedComment ->', comment);
        if(!this.props.onSelectedComment) {
            return;
        }
        this.props.onSelectedComment(comment)
    }

    _onDeletedComment(comment){
        console.log('_onDeletedComment ->', comment);
        if(!this.props.onDeletedComment) {
            return;
        }
        this.props.onDeletedComment(comment)
    }

    _onCommentDelete(error){
        console.log('_onCommentDelete ->', error);
        if(!this.props.onCommentDelete) {
            return;
        }
        this.props.onCommentDelete(comment, error)
    }

    _onUpdatedComment(comment){
        console.log('_onUpdatedComment ->', comment);
        if(!this.props.onUpdatedComment) {
            return;
        }
        this.props.onUpdatedComment(comment)
    }

    _onCommentUpdate(error){
        console.log('_onCommentUpdate ->', error);
        if(!this.props.onCommentUpdate) {
            return;
        }
        this.props.onCommentUpdate(comment, error)
    }

    // Android events
    _onDeleteCommentSuccess(commentEntry) {
        console.log('_onDeleteCommentSuccess -> ', commentEntry);
        if(!this.props.onDeleteCommentSuccess) {
            return;
        }
        this.props.onDeleteCommentSuccess(commentEntry);
    }

    _onUpdateCommentSuccess(commentEntry) {
        console.log('_onUpdateCommentSuccess -> ', commentEntry);
        if(!this.props.onUpdateCommentSuccess) {
            return;
        }
        this.props.onUpdateCommentSuccess(commentEntry);
    }

    _onListPageFailed(error) {
        console.log('_onListPageFailed -> ', error);
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(error);
    }

    _onListPageReceived(comments) {
        console.log('_onListPageReceived -> ', comments);
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(comments);
    }

    _onListItemSelected(commentEntry) {
        console.log('_onListItemSelected -> ', commentEntry);
        if(!this.props.onListItemSelected) {
            return;
        }
        this.props.onListItemSelected(commentEntry);
    }

    _onError(error) {
        console.log('_onError -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}