'use sctrict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeCommentListScreenlet = requireNativeComponent('CommentListScreenlet');

export default class CommentListScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.screenletAttributes = {
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            editable: props.editable || true,
            theme: props.theme || ""
        }
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onCommentListScreenletDeleteCommentSuccess', this.props.onDeleteCommentSuccess);
        DeviceEventEmitter.addListener('onCommentListScreenletUpdateCommentSuccess', this.props.onUpdateCommentSuccess);
        DeviceEventEmitter.addListener('onCommentListScreenletListPageFailed', this.props.onListPageFailed);
        DeviceEventEmitter.addListener('onCommentListScreenletListPageReceived', this.props.onListPageReceived);
        DeviceEventEmitter.addListener('onCommentListScreenletListItemSelected', this.props.onListItemSelected);
        DeviceEventEmitter.addListener('onCommentListScreenletError', this.props.onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeCommentListScreenlet
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}