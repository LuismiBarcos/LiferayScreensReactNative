'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { DDLListScreenlet } from "./../LiferayScreens";

export default class DDLList extends Component {
    render() {
        return(
            <DDLListScreenlet 
                {...this.props}
                style={styles.ddl}
                recordSetId={33280}
                labelFields={"description"}
                theme={"custom"}
                // iOS events
                onDDLListResponseRecords={this._onDDLListResponseRecords.bind(this)}
                // Android events
                onListPageReceived={this._onListPageReceived.bind(this)}
            />
        );
    }

    _onDDLListResponseRecords(records) {
        console.log('USUARIO -> _onDDLListResponseRecords ', records);
    }

    _onListPageReceived(list) {
        console.log('USUARIO -> _onListPageReceived ', list);
    }
}

const styles = StyleSheet.create({
    ddl: {
      height: 350,
      width: 400
    }
});