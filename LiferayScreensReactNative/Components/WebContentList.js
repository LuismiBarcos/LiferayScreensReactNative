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
                // iOS Events
                onWebContentListResponse={this._onWebContentListResponse}
                onWebContentSelected={this._onWebContentSelected}
                // Android Events
                onListPageReceived={this._onListPageReceived}
                onListItemSelected={this._onListItemSelected}
            />
        );
    }

    _onWebContentListResponse(contents) {
        console.log('USUARIO --> _onWebContentListResponse ', contents);
    }

    _onWebContentSelected(content) {
        console.log('USUARIO --> _onWebContentSelected ', content);
    }

    _onListPageReceived(list) {
        console.log('USUARIO --> _onListPageReceived ', list);
    }

    _onListItemSelected(itemSelected) {
        console.log('USUARIO --> _onListItemSelected ', itemSelected);
    }
}

const styles = StyleSheet.create({
    content: {
      height: 350,
      width: 400
    }
  });