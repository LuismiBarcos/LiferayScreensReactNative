'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { WebContentListScreenlet } from "./../LiferayScreens";

export default class WebContentList extends Component {
    render() {
        return(
            <WebContentListScreenlet
                {...this.props}
                style={styles.content}
                folderId={0}
                labelFields={"description"}
            />
        );
    }
}

const styles = StyleSheet.create({
    content: {
      height: 350,
      width: 400
    }
  });