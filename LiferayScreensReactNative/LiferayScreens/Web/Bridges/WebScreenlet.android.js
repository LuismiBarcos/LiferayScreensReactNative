'use strict'
import React, {Component} from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeWebScreenlet = requireNativeComponent('WebScreenlet');

export default class WebScreenlet extends Component {
    constructor(props) {
        super(props);

        this.screenletAttributes = {
            URL: props.URL || "",
            jsFileName: props.jsFileName || "",
            cssFileName: props.cssFileName || ""
        }
    }

    componentWillMount() {        
        // Events
        DeviceEventEmitter.addListener('onWebScreenletPageLoaded', this.props.onPageLoaded);
        DeviceEventEmitter.addListener('onWebScreenletScriptMessageHandler', this.props.onScriptMessageHandler);
        DeviceEventEmitter.addListener('onWebScreenletError', this.props.onError);
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeWebScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}