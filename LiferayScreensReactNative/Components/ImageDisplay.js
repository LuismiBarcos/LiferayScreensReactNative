'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { ImageDisplayScreenlet } from "./../LiferayScreens";

export default class ImageDisplay extends Component {
  render(){
    return(
      <ImageDisplayScreenlet 
        {...this.props}
        style={styles.image}
        className={"com.liferay.document.library.kernel.model.DLFileEntry"}
        classPK={54498}
        theme={"custom"}
        // iOS Events
        onFileAssetResponse={this._onFileAssetResponse}
        // Android Events
        onRetrieveAssetSuccess={this._onRetrieveAssetSuccess}
      />
    );
  }

  _onFileAssetResponse(url) {
    console.log('USUARIO --> _onFileAssetResponse ', url);
  }

  _onRetrieveAssetSuccess(assetEntry) {
    console.log('USUARIO --> _onFileAssetResponse ', assetEntry);
  }
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 500
  }
});