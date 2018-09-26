'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';

import BaseScreenlet from '../../Base/BaseScreenlet';

const NativeUserPortraitScreenlet = requireNativeComponent('UserPortraitScreenlet');

export default class UserPortraitScreenlet extends BaseScreenlet {
    constructor(props){
        super(props);

        this.screenletAttributes = {
            userId: props.userId || 0,
            borderWidth: props.borderWidth || 1,
            editable: props.editable || false,
            theme: props.theme || ""
        }
    }
    render() {
        return (
            <NativeUserPortraitScreenlet 
                {... this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}