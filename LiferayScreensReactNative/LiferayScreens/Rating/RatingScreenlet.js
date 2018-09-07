'use-strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

import NativeRatingScreenlet from './Bridges/RatingScreenlet'

export default class RatingScreenlet extends Component {
    render(){
        return(
            <NativeRatingScreenlet 
                {...this.props}
                onRatingOperationSuccess={this._onRatingOperationSuccess.bind(this)}
                onError={this._onError.bind(this)}
            />
        );
    }

    // iOS Events
    _onRatingRetrieve(rating) {
        if(!this.props.onRatingRetrieve) {
            return;
        }
        console.log("_onRatingRetrieve -> ", rating)
        this.props.onRatingRetrieve(rating)
    }

    _onRatingDeleted(rating) {
        if(!this.props.onRatingDeleted) {
            return;
        }
        console.log("_onRatingDeleted -> ", rating)
        this.props.onRatingDeleted(rating)
    }

    _onRatingUpdated(rating) {
        if(!this.props.onRatingUpdated) {
            return;
        }
        console.log("_onRatingUpdated -> ", rating)
        this.props.onRatingUpdated(rating)
    }

    _onRatingError(error) {
        if(!this.props.onRatingError) {
            return;
        }
        console.log("_onRatingError -> ", error)
        this.props.onRatingError(error)
    }

    // Android events
    _onRatingOperationSuccess(user) {
        console.log('rating success! -> ', user);
        if(!this.props.onRatingOperationSuccess) {
            return;
        }
        this.props.onRatingOperationSuccess(user);
    }

    _onError(error) {
        console.log('rating error! -> ', error);
        if(!this.props.onError) {
            return;
        }
        this.props.onError(error);
    }
}