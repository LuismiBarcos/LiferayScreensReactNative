'use srict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeRatingScreenlet = requireNativeComponent('RatingScreenlet');

export default class RatingScreenlet extends Component {
    constructor(props){
        super(props);

        this.state = {
            autoLoad: props.autoLoad || true,
            editable: props.editable || true,
            entryId: props.entryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
            groupId: props.groupId || 0
        }

        this._onRatingOperationSuccess = this._onRatingOperationSuccess.bind(this);
        this._onError = this._onError.bind(this);
    }
    
    componentWillMount(){
        //Events
        DeviceEventEmitter.addListener('onRatingScreenletOperationSuccess', this._onRatingOperationSuccess);
        DeviceEventEmitter.addListener('onRatingScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render(){
        return(
            <NativeRatingScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    _onRatingOperationSuccess(event) {
        if(!this.props.onRatingOperationSuccess) {
            return;
        }
        this.props.onRatingOperationSuccess(event.user);
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }   
}