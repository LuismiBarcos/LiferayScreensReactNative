'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeCommentListScreenlet = requireNativeComponent('CommentListScreenlet');

export default class CommentListScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            className: props.className || "",
            classPK: props.classPK || 0,
            editable: props.editable || true,
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
        }
    }
    render() {
        return(
            <NativeCommentListScreenlet 
                {...this.props}
                screenletAttributes={this.state}
                onListResponseComments={this._onListResponseComments.bind(this)}
                onCommentListError={this._onCommentListError.bind(this)}
                onSelectedComment={this._onSelectedComment.bind(this)}
                onDeletedComment={this._onDeletedComment.bind(this)}
                onCommentDelete={this._onCommentDelete.bind(this)}
                onUpdatedComment={this._onUpdatedComment.bind(this)}
                onCommentUpdate={this._onCommentUpdate.bind(this)}
            />
        );
    }

    //Events
    _onListResponseComments(event){
        if(!this.props.onListResponseComments) {
            return;
        }
        this.props.onListResponseComments(event.nativeEvent.comment)
    }

    _onCommentListError(event){
        if(!this.props.onCommentListError) {
            return;
        }
        this.props.onCommentListError(event.nativeEvent.error)
    }

    _onSelectedComment(event){
        if(!this.props.onSelectedComment) {
            return;
        }
        this.props.onSelectedComment(event.nativeEvent.comment)
    }

    _onDeletedComment(event){
        if(!this.props.onDeletedComment) {
            return;
        }
        this.props.onDeletedComment(event.nativeEvent.comment)
    }

    _onCommentDelete(event){
        if(!this.props.onCommentDelete) {
            return;
        }
        this.props.onCommentDelete(event.nativeEvent.comment, event.nativeEvent.error)
    }

    _onUpdatedComment(event){
        if(!this.props.onUpdatedComment) {
            return;
        }
        this.props.onUpdatedComment(event.nativeEvent.comment)
    }

    _onCommentUpdate(event){
        if(!this.props.onCommentUpdate) {
            return;
        }
        this.props.onCommentUpdate(event.nativeEvent.comment, event.nativeEvent.error)
    }
}