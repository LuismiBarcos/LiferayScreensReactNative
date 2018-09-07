'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeWebContentDisplayScreenlet = requireNativeComponent('WebContentDisplayScreenlet');

export default class WebContentDisplayScreenlet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupId: props.groupId || 0,
            articleId: props.articleId || "",
            templateId: props.templateId || 0,
            structureId: props.structureId || 0,
            autoLoad: props.autoLoad || true
        }

        this._onWebContentReceived = this._onWebContentReceived.bind(this);
        this._onUrlClicked = this._onUrlClicked.bind(this);
        this._onWebContentTouched = this._onWebContentTouched.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount(){
        //Events
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletReceived', this._onWebContentReceived);
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletUrlClicked', this._onUrlClicked);
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletTouched', this._onWebContentTouched);
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletError', this._onError);
    }
    
    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeWebContentDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onWebContentReceived(event) {
        if(!this.props.onWebContentReceived) {
            return;
        }
        this.props.onWebContentReceived(event.html);
    }

    _onUrlClicked(event) {
        if(!this.props.onUrlClicked) {
            return;
        }
        this.props.onUrlClicked(event.url);
    }

    _onWebContentTouched(event) {
        if(!this.props.onWebContentTouched) {
            return;
        }
        this.props.onWebContentTouched(event.touched);
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}