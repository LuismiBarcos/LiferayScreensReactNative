'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { CommentDisplayScreenlet } from './../LiferayScreens';

export default class CommentDisplay extends Component {
    render() {
        return(
            <CommentDisplayScreenlet 
                style={styles.comment}
                commentId={63710}
                theme={"custom"}
                // iOS Events
                onCommentLoaded={this._onCommentLoaded}
                // Android Events
                onLoadCommentSuccess={this._onLoadCommentSuccess}
            />
        );
    }

    _onCommentLoaded(comment) {
        console.log('USUARIO --> _onCommentLoaded ', comment);
    }

    _onLoadCommentSuccess(comment) {
        console.log('USUARIO --> _onCommentLoaded ', comment);
    }
}

const styles = StyleSheet.create({
    comment: {
        height: 300,
        width: 300,
    }
});