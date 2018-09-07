'use strict'
import React, {Component} from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeWebScreenlet = requireNativeComponent('WebScreenlet');

export default class WebScreenlet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            URL: props.URL || "",
            jsFileName: props.jsFileName || "",
            cssFileName: props.cssFileName || ""
        }

        this._onPageLoaded = this._onPageLoaded.bind(this);
        this._onScriptMessageHandler = this._onScriptMessageHandler.bind(this);
        this._onError = this._onError.bind(this);
    }

    componentWillMount() {
        // DeviceEventEmitter.addListener('onPageLoaded', this.handleListener('onPageLoaded'))
        
        // Events
        DeviceEventEmitter.addListener('onWebScreenletPageLoaded', this._onPageLoaded);
        DeviceEventEmitter.addListener('onWebScreenletScriptMessageHandler', this._onScriptMessageHandler);
        DeviceEventEmitter.addListener('onWebScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeWebScreenlet 
                {...this.props}
                // ref={(ref) => this.test = ref }
                // configuration={JSON.stringify(this.props)}
                configuration={this.state}
            />
        );
    }

    // handleListener(methodName) {
    //     return (...args) => {
    //         console.log(`${methodName}, ${args}`);
    //         if (!this.props[methodName]) {
    //             return;
    //         }
    
    //         this.props[methodName](...args)
    //     }
    // }

    // Events

    _onPageLoaded(event) {
        if(!this.props.onPageLoaded) {
            return;
        }
        this.props.onPageLoaded(event.page);
    }

    _onScriptMessageHandler(event) {
        if(!this.props.onScriptMessageHandler) {
            return;
        }
        this.props.onScriptMessageHandler(event.message);
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}