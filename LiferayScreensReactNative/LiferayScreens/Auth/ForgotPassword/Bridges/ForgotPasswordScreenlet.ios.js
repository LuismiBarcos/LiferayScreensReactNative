'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeForgotPasswordScreenlet = requireNativeComponent('ForgotPasswordScreenlet');

 export default class ForgotPasswordScreenlet extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            anonymousApiUserName: props.anonymousApiUserName || "",
            anonymousApiPassword: props.anonymousApiPassword || "",
            companyId: props.companyId || 0
        };
    }
    render(){
         return(
             <NativeForgotPasswordScreenlet 
                 {...this.props}
                 screenletAttributes={this.state}
                 onForgotPasswordSent={this._onForgotPasswordSent.bind(this)}
                 onForgotPasswordError={this._onForgotPasswordError.bind(this)}
             />
         );
     }

     // Events
     _onForgotPasswordSent(event) {
        if(!this.props.onForgotPasswordSent){
            return;
        }
        this.props.onForgotPasswordSent(event.nativeEvent.passwordSent)
     }

     _onForgotPasswordError(event) {
        if(!this.props.onForgotPasswordError){
            return;
        }
        this.props.onForgotPasswordError(event.nativeEvent.error)
     }
 }