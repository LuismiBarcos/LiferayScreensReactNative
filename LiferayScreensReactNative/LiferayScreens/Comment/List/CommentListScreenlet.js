'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeCommentListScreenlet from './Bridges/CommentListScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class CommentListScreenlet extends BaseScreenlet {
    render() {
        return(
            <NativeCommentListScreenlet 
                {...this.props}
                // iOS events
                onListResponseComments={this.handleListener('onListResponseComments', 'comments')}
                onCommentListError={this.handleListener('onCommentListError', 'error')}
                onSelectedComment={this.handleListener('onSelectedComment', 'comment')}
                onDeletedComment={this.handleListener('onDeletedComment', 'comment')}
                onCommentDelete={this.handleListener('onCommentDelete', 'comment', 'error')}
                onUpdatedComment={this.handleListener('onUpdatedComment', 'comment')}
                onCommentUpdate={this.handleListener('onCommentUpdate', 'comment', 'error')}
                // Android events
                onDeleteCommentSuccess={this.handleListener('onDeleteCommentSuccess', 'commentEntry')}
                onUpdateCommentSuccess={this.handleListener('onUpdateCommentSuccess', 'commentEntry')}
                onListPageFailed={this.handleListener('onListPageFailed', 'error')}
                onListPageReceived={this.handleListener('onListPageReceived', 'comments')}
                onListItemSelected={this.handleListener('onListItemSelected', 'commentEntry')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}