'use strict'
import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { DDLFormScreenlet } from "./../LiferayScreens";

export default class  DDLForm extends Component {
    render(){
        return(
            <DDLFormScreenlet 
                style={styles.ddl}
                structureId={54371}
                recordSetId={54375}
                // iOS event
                onFormLoaded={this._onFormLoaded}
                // Android event
                onDDLFormLoaded={this._onDDLFormLoaded}
            />
        );
    }

    _onFormLoaded(record) {
        console.log('USUARIO -> _onFormLoaded', record);
    }

    _onDDLFormLoaded(record) {
        console.log('USUARIO -> _onDDLFormLoaded', record);
    }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    ddl: {
      height: height,
      width: width
    }
});