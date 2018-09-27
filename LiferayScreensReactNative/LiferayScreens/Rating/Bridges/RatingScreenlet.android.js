'use srict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeRatingScreenlet = requireNativeComponent('RatingScreenlet');

export default class RatingScreenlet extends Component {
    constructor(props) {
        super(props);

        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            editable: props.editable || true,
            entryId: props.entryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
            groupId: props.groupId || 0,
            theme: props.theme || ""
        }
    }
    
    componentWillMount() {
        //Events
        DeviceEventEmitter.addListener('onRatingScreenletOperationSuccess', this.props.onRatingOperationSuccess);
        DeviceEventEmitter.addListener('onRatingScreenletError', this.props.onError);
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeRatingScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }   
}