'use strict'
import React, {Component} from 'react';
import { requireNativeComponent, Platform } from 'react-native'

export default class BaseScreenlet extends Component {
    constructor(props) {
        super (props);
    }
    
    handleListener(methodName, ...attributeNames) {
        return (event) => {
            console.log(`${methodName}, ${attributeNames}`);
            if (!this.props[methodName]) {
                return;
            }
            const eventAtributes = this.extractAttributes(event, ...attributeNames );
            this.props[methodName](...eventAtributes);
        }
    }

    extractAttributes(event, ...attributeNames) {
        return attributeNames.map (attributeName => {
            if (Platform.OS === "android") {
                return this._parseJsonIfNeeded(event[attributeName])
            }
            else if (Platform.OS === "ios") {
                return event.nativeEvent[attributeName];
            }
        })
    }

    _parseJsonIfNeeded(eventAtribute) {
        if (typeof eventAtribute === 'string') {
            return this._parseJson(eventAtribute)
        } else {
            return eventAtribute
        }
    }

    _parseJson(eventAtribute) {
        try {
            eventAtribute = JSON.parse(eventAtribute);
        } finally {
            return eventAtribute
        }
    }
}