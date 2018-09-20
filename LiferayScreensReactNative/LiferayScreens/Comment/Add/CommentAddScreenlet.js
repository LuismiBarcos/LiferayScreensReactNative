'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeCommentAddScreenlet from './Bridges/CommentAddScreenlet';
import BaseScreenlet from '../../Base/BaseScreenlet';

export default class CommentAddScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeCommentAddScreenlet 
                {...this.props}
                // iOS events
                onCommentAdded={this.handleListener('onCommentAdded', 'comment')}
                onAddCommentError={this.handleListener('onAddCommentError', 'error')}
                onCommentUpdated={this.handleListener('onCommentUpdated', 'comment')}
                onUpdateCommentError={this.handleListener('onUpdateCommentError', 'error')}
                // Android events
                onAddCommentSuccess={this.handleListener('onAddCommentSuccess', 'comment')}
                onError={this.handleListener('onError', 'error')}
            />
        );
    }
}