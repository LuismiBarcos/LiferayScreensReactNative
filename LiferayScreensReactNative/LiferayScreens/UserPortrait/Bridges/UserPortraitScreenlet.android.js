'use strict'
import React, {Component} from 'react';
import { requireNativeComponent} from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeUserPortraitScreenlet = requireNativeComponent('UserPortraitScreenlet');

export default class UserPortraitScreenlet extends Component {
    constructor(props){
        super(props);
        this.state = {
            autoLoad: props.autoLoad || true,
            userId: props.userId || 0,
            male: props.male || true,
            portraitId: props.portraitId || 0,
            uuid: props.uuid || "",
            editable: props.editable || false
        }

        this._onUserPortraitLoadReceived = this._onUserPortraitLoadReceived.bind(this);
        this._onUserPortraitUploaded = this._onUserPortraitUploaded.bind(this);
        this._onUserPortraitError = this._onUserPortraitError.bind(this);
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onUserPortraitScreenletLoadReceived', this._onUserPortraitLoadReceived);
        DeviceEventEmitter.addListener('onUserPortraitScreenletUploaded', this._onUserPortraitUploaded);
        DeviceEventEmitter.addListener('onUserPortraitScreenletError', this._onUserPortraitError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeUserPortraitScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    _onUserPortraitLoadReceived(event) {
        if(!this.props.onUserPortraitLoadReceived) {
            return;
        }
        this.props.onUserPortraitLoadReceived(event.image);
    }

    _onUserPortraitUploaded(event) {
        if(!this.props.onUserPortraitUploaded) {
            return;
        }
        this.props.onUserPortraitUploaded(event.onUserPortraitUploaded);
    }

    _onUserPortraitError(event) {
        if(!this.props.onUserPortraitError) {
            return;
        }
        this.props.onUserPortraitError(event.error);
    }
}
