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
      />
    );
  }
}

const styles = StyleSheet.create({
  audio: {
    height: 350,
    width: 400
  }
});