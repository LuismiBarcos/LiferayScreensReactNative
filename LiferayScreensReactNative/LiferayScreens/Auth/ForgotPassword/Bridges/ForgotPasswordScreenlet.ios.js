'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeForgotPasswordScreenlet = requireNativeComponent('ForgotPasswordScreenlet');

export default class ForgotPasswordScreenlet extends Component {    
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0
        };
    }
    render(){
         return(
             <NativeForgotPasswordScreenlet 
                 {...this.props}
                 screenletAttributes={this.screenletAttributes}
             />
         );
     }
}