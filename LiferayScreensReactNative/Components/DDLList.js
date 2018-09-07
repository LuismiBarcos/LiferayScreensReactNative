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
            />
        );
    }
}

const styles = StyleSheet.create({
    ddl: {
      height: 350,
      width: 400
    }
});