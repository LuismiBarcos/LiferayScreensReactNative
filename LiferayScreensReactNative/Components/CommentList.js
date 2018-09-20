'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { CommentListScreenlet } from './../LiferayScreens';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <CommentListScreenlet 
                style={styles.comments}
                classPK={74606}
                className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                // iOS events
                onListResponseComments={this._onListResponseComments}
                onSelectedComment={this._onSelectedComment}
                // Android events
                onListPageReceived={this._onListPageReceived}
                onListItemSelected={this._onListItemSelected}
            />
        );
    }

    _onListResponseComments(comments) {
        console.log('USUARIO --> _onListResponseComments ', comments);
    }

    _onSelectedComment(comment) {
        console.log('USUARIO --> _onSelectedComment ', comment);
    }

    _onListPageReceived(comments) {
        console.log('USUARIO --> _onListPageReceived ', comments);
    }

    _onListItemSelected(commentEntry) {
        console.log('USUARIO --> _onListItemSelected ', commentEntry);
    }
}

const styles = StyleSheet.create({
    comments: {
        height: 300,
        width: 300,
    }
});