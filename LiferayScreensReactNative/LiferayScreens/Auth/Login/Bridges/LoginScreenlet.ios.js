'use-strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    requireNativeComponent,
} from 'react-native'

const NativeLoginScreenlet = requireNativeComponent('LoginScreenlet');

export default class LoginScreenlet extends Component {
    render() {
        return (
            <NativeLoginScreenlet
                {...this.props}
            />
        );
    }
}