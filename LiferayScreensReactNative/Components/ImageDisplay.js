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
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 500
  }
});