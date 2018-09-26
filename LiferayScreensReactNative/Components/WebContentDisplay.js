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
                theme={"custom"}
                // iOS Events
                onWebContentResponse={this._onWebContentResponse}
                // Android Events
                onWebContentReceived={this._onWebContentReceived}
            />
        );
    }

    _onWebContentResponse(html) {
        console.log('USUARIO --> _onWebContentResponse ', html);
    }

    _onWebContentReceived(html) {
        console.log('USUARIO --> _onWebContentReceived ', html);
    }
}
var {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    webdisplay: {
      height: height,
      width: width
    }
  });