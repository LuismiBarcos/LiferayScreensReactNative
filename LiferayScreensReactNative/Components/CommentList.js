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
            />
        );
    }
}

const styles = StyleSheet.create({
    comments: {
        height: 300,
        width: 300,
    }
});