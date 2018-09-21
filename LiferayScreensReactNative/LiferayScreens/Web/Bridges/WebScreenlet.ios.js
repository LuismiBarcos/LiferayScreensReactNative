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
            />
        );
    }
}