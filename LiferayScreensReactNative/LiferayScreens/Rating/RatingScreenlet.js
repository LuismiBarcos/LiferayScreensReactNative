'use-strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeRatingScreenlet from './Bridges/RatingScreenlet'
import BaseScreenlet from '../Base/BaseScreenlet';

export default class RatingScreenlet extends BaseScreenlet {
    render(){
        return(
            <NativeRatingScreenlet 
                {...this.props}
                // iOS events
                onRatingRetrieve={this.handleListener('onRatingRetrieve', 'rating')}
                onRatingDeleted={this.handleListener('onRatingRetrieve', 'rating')}
                onRatingUpdated={this.handleListener('onRatingRetrieve', 'rating')}
                onRatingError={this.handleListener('onRatingRetrieve', 'error')}
                // Android events
                onRatingOperationSuccess={this.handleListener('onRatingRetrieve', 'user')}
                onError={this.handleListener('onRatingRetrieve', 'error')}
            />
        );
    }
}