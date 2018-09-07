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
            />
        );
    }
}

const styles = StyleSheet.create({
    commentAdd: {
        height: 60,
        width: 300,
    }
});