'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeWebContentDisplayScreenlet = requireNativeComponent('WebContentDisplayScreenlet');

export default class WebContentDisplayScreenlet extends Component {
    constructor(props) {
        super(props);

        this.screenletAttributes = {
            groupId: props.groupId || 0,
            articleId: props.articleId || "",
            templateId: props.templateId || 0,
            structureId: props.structureId || 0,
            autoLoad: props.autoLoad || true,
            theme: props.theme || ""
        }
    }

    componentWillMount(){
        //Events
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletReceived', this.props.onWebContentReceived);
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletUrlClicked', this.props.onUrlClicked);
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletTouched', this.props.onWebContentTouched);
        DeviceEventEmitter.addListener('onWebContentDisplayScreenletError', this.props.onError);
    }
    
    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }
    
    render(){
        return(
            <NativeWebContentDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}