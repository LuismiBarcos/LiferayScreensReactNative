'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { CommentAddScreenlet } from './../LiferayScreens';

export default class CommentAdd extends Component {
    render(){
        return(
            <CommentAddScreenlet 
                style={styles.commentAdd}
                classPK={74606}
                className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                // iOS Events
                onCommentAdded={this._onCommentAdded}
                // Android Events
                onAddCommentSuccess={this._onAddCommentSuccess}
            />
        );
    }

    _onCommentAdded(comment) {
        console.log('USUARIO --> _onCommentAdded ', comment);
    }

    _onAddCommentSuccess(comment) {
        console.log('USUARIO --> _onAddCommentSuccess ', comment);
    }
}

const styles = StyleSheet.create({
    commentAdd: {
        height: 60,
        width: 300,
    }
});