'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeUserPortraitScreenlet = requireNativeComponent('UserPortraitScreenlet');

export default class UserPortraitScreenlet extends Component {
    constructor(props){
        super(props);

        this.state = {
            userId: props.userId || 0,
            borderWidth: props.borderWidth || 1,
            editable: props.editable || false
        }
    }
    render() {
        return (
            <NativeUserPortraitScreenlet 
                {... this.props}
                screenletAttributes={this.state}
                onUserPortraitLoaded={this._onUserPortraitLoaded.bind(this)}
                onUserPortraitError={this._onUserPortraitError.bind(this)}
                onUserPortraitUploaded={this._onUserPortraitUploaded.bind(this)}
                onUserPortraitUploadError={this._onUserPortraitUploadError.bind(this)}
            />
        );
    }

    // Events
    _onUserPortraitLoaded(event) {
        if(!this.props.onUserPortraitLoaded) {
            return;
        }
        this.props.onUserPortraitLoaded(event.nativeEvent.image)
    }

    _onUserPortraitError(event) {
        if(!this.props.onUserPortraitError){
            return;
        }
        this.props.onUserPortraitError(event.nativeEvent.error)
    }

    _onUserPortraitUploaded(event) {
        if(!this.props.onUserPortraitUploaded){
            return;
        }
        this.props.onUserPortraitUploaded(event.nativeEvent.attributes)
    }

    _onUserPortraitUploadError(event) {
        if(!this.props.onUserPortraitUploadError){
            return;
        }
        this.props.onUserPortraitUploadError(event.nativeEvent.error)
    }
}