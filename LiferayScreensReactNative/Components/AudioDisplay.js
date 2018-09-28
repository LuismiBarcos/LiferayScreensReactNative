'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { AudioDisplayScreenlet } from "./../LiferayScreens";

export default class AudioDisplay extends Component {
  render(){
    return(
      <AudioDisplayScreenlet 
        {...this.props}
        style={styles.audio}
        className={"com.liferay.document.library.kernel.model.DLFileEntry"}
        classPK={57433}
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
    console.log('USUARIO --> _onRetrieveAssetSuccess ', assetEntry);
  }
}

const styles = StyleSheet.create({
  audio: {
    height: 350,
    width: 400
  }
});