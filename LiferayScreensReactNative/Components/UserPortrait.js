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
            editable={true}
            // Events
            onUserPortraitLoaded={this._onUserPortraitLoaded}
            onUserPortraitError = {this._onUserPortraitError}
            onUserPortraitUploaded = {this._onUserPortraitUploaded}
            onUserPortraitUploadError={this._onUserPortraitUploadError}
            onUserPortraitLoadReceived={this._onUserPortraitLoadReceived}
        />
    );
  }

  _onUserPortraitLoaded(image){
    console.log('USUARIO --> _onUserPortraitLoaded ', image);
  }

  _onUserPortraitError(error){
    console.log('USUARIO --> _onUserPortraitError ', error);
  }

  _onUserPortraitUploaded(attributes){
    console.log('USUARIO --> _onUserPortraitUploaded ', attributes);
  }

  _onUserPortraitUploadError(error){
    console.log('USUARIO --> _onUserPortraitUploadError ', error);
  }

  _onUserPortraitLoadReceived(image) {
    console.log('USUARIO --> _onUserPortraitLoadReceived ', image);
  }
}

const styles = StyleSheet.create({
    portrait: {
      height: 150,
      width: 150
    }
  });