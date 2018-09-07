'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { UserPortraitScreenlet } from "./../LiferayScreens";

export default class UserPortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.navigation.getParam('userId', 0)
    };
  }
  
  render() {
    return(
        <UserPortraitScreenlet 
            style={styles.portrait}
            userId={this.state.userId}
        />
    );
  }
}

const styles = StyleSheet.create({
    portrait: {
      height: 150,
      width: 150
    }
  });