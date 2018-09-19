'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeWebContentDisplayScreenlet = requireNativeComponent('WebContentDisplayScreenlet');

export default class WebContentDisplayScreenlet extends Component {
    constructor(props) {
        super(props);

        this.screenletAttributes = {
            groupId: props.groupId || 0,
            articleId: props.articleId || "",
            templateId: props.templateId || 0,
            structureId: props.structureId || 0,
            autoLoad: props.autoLoad || true
        }
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