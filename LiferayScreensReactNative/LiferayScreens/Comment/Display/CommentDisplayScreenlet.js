'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeCommentDisplayScreenlet from './Bridges/CommentDisplayScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class CommentDisplayScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeCommentDisplayScreenlet 
                {...this.props}
                // iOS events
                onCommentLoaded={this.handleListener('onCommentLoaded', 'comment')}
                onLoadCommentError={this.handleListener('onLoadCommentError', 'error')}
                onCommentDeleted={this.handleListener('onCommentDeleted', 'comment')}
                onDeleteComment={this.handleListener('onDeleteComment', 'comment', 'error')}
                onCommentUpdated={this.handleListener('onCommentUpdated', 'comment')}
                onUpdateComment={this.handleListener('onUpdateComment', 'comment', 'error')}
                // Android events
                onLoadCommentSuccess={this.handleListener('onLoadCommentSuccess', 'comment')}
                onDeleteCommentSuccess={this.handleListener('onDeleteCommentSuccess', 'comment')}
                onUpdateCommentSuccess={this.handleListener('onUpdateCommentSuccess', 'comment')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}

