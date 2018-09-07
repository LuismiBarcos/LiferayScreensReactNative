'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { RatingScreenlet } from "./../LiferayScreens";

export default class Rating extends Component {
    render() {
        return(
            <RatingScreenlet 
                style={styles.rating}
                classPK={74606}
                className={"com.liferay.document.library.kernel.model.DLFileEntry"}
            />
        );
    }
}

const styles = StyleSheet.create({
    rating: {
      height: 150,
      width: 150
    }
  });