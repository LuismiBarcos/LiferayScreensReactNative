'use strict'
import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  NativeModules
} from 'react-native';

import { WebScreenlet } from "./../LiferayScreens";

export default class Web extends Component {
    render() {
        return(
            <WebScreenlet 
                {...this.props}
                style={styles.web}
                // URL={"/web/guest/"}
                URL={"https://www.andorratelecom.ad/"}
                jsFileName={"MyJs"}
                cssFileName={"MyCss"}
                onPageLoaded={this._onPageLoaded}
            />
        );
    }

    _onPageLoaded(page) {
        console.log('USUARIO --> _onPageLoaded ', page);
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    web: {
      height: height,
      width: width
    }
});