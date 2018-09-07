'use strict'
import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { WebContentDisplayScreenlet } from "./../LiferayScreens";

export default class WebContent extends Component {
    render(){
        return(
            <WebContentDisplayScreenlet 
                style={styles.webdisplay}
                articleId={"57343"}
            />
        );
    }
}
var {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    webdisplay: {
      height: height,
      width: width
    }
  });