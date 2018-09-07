'use strict'
import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { FileDisplayScreenlet } from "./../LiferayScreens";

export default class FileDisplay extends Component {
    render(){
        return(
            <FileDisplayScreenlet 
                style={styles.file}
                className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                classPK={66505}
            />
        );
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    file: {
      height: height,
      width: width
    }
  });