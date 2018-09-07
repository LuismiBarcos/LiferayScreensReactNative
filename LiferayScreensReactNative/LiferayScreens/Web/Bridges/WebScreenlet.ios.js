'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

const NativeWebScreenlet = requireNativeComponent('WebScreenlet');

export default class WebScreenlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            URL: props.URL || "",
            jsFileName: props.jsFileName || "",
            cssFileName: props.cssFileName || ""
        }
    }
    render(){
        return(
            <NativeWebScreenlet 
                {...this.props}
                screenletAttributes={this.state}
                onPageLoaded={this._onPageLoaded.bind(this)}
                onWebError={this._onWebError.bind(this)}
                onNotify={this._onNotify.bind(this)}
            />
        );
    }

    // Events
    _onPageLoaded(event) {
        if(!this.props.onPageLoaded){
            return;
        }
        this.props.onPageLoaded(event.nativeEvent.url)
    }

    _onWebError(event) {
        if(!this.props.onWebError){
            return;
        }
        this.props.onWebError(event.nativeEvent.error)
    }

    _onNotify(event) {
        if(!this.props.onNotify){
            return;
        }
        this.props.onNotify(event.nativeEvent.namespace, event.nativeEvent.message);
    }
}