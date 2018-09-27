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
                theme={"custom"}
                // iOS events
                onRatingRetrieve={this._onRatingRetrieve}
                onRatingDeleted={this._onRatingDeleted}
                onRatingUpdated={this._onRatingUpdated}
                onRatingError={this._onRatingError}
                // Android events
                onRatingOperationSuccess={this._onRatingOperationSuccess}
                onError={this._onError}
            />
        );
    }

    _onRatingRetrieve(rating) {
        console.log('USUARIO --> _onRatingRetrieve ', rating);
    }

    _onRatingDeleted(rating) {
        console.log('USUARIO --> _onRatingDeleted ', rating);
    }

    _onRatingUpdated(rating) {
        console.log('USUARIO --> _onRatingUpdated ', rating);
    }

    _onRatingError(error) {
        console.log('USUARIO --> _onRatingError ', error);
    }

    _onRatingOperationSuccess(user) {
        console.log('USUARIO --> _onRatingOperationSuccess ', user);
    }

    _onError(error) {
        console.log('USUARIO --> _onError ', error);
    }
}

const styles = StyleSheet.create({
    rating: {
      height: 150,
      width: 150
    }
  });