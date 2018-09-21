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
                // iOS Events
                onFileAssetResponse={this._onFileAssetResponse.bind(this)}
                onFileAssetError={this._onFileAssetError.bind(this)}                
            />
        );
    }

    // iOS Events
    _onFileAssetResponse(url) {
        console.log('USUARIO --> _onFileAssetResponse ', url)
    }

    _onFileAssetError(error) {
        console.log('USUARIO --> _onFileAssetError ', error)
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    file: {
      height: height,
      width: width
    }
  });