'use strict'
import React, {Component} from 'react';
import { requireNativeComponent, Platform } from 'react-native'

export default class Base extends Component {
    constructor(props) {
        super (props);
    }
    
    handleListener(methodName, ...attributeNames) {
        return (event) => {
            console.log(`${methodName}, ${attributeNames}`);
            if (!this.props[methodName]) {
                return;
            }
           const eventAtributes =  attributeNames.map (attributeName => {
                if (Platform.OS === "android") {
                    return event[attributeName];
                }
                else if (Platform.OS === "ios") {
                    return event.nativeEvent[attributeName];
                }
            })
            this.props[methodName](...eventAtributes)
        }
    }
}