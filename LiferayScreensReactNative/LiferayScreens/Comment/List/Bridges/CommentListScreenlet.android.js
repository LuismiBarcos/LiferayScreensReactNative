'use sctrict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const NativeCommentListScreenlet = requireNativeComponent('CommentListScreenlet');

export default class CommentListScreenlet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            autoLoad: props.autoLoad || true,
            className: props.className || "",
            classPK: props.classPK || 0,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            editable: props.editable || true
        }

        this._onDeleteCommentSuccess = this._onDeleteCommentSuccess.bind(this);
        this._onUpdateCommentSuccess = this._onUpdateCommentSuccess.bind(this);
        this._onListPageFailed = this._onListPageFailed.bind(this);
        this._onListPageReceived = this._onListPageReceived.bind(this);
        this._onListItemSelected = this._onListItemSelected.bind(this);
        this._onError = this._onError.bind(this);
    }
    
    componentWillMount() {
        // Events
        DeviceEventEmitter.addListener('onCommentListScreenletDeleteCommentSuccess', this._onDeleteCommentSuccess);
        DeviceEventEmitter.addListener('onCommentListScreenletUpdateCommentSuccess', this._onUpdateCommentSuccess);
        DeviceEventEmitter.addListener('onCommentListScreenletListPageFailed', this._onListPageFailed);
        DeviceEventEmitter.addListener('onCommentListScreenletListPageReceived', this._onListPageReceived);
        DeviceEventEmitter.addListener('onCommentListScreenletListItemSelected', this._onListItemSelected);
        DeviceEventEmitter.addListener('onCommentListScreenletError', this._onError);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeAllListeners();
    }

    render() {
        return(
            <NativeCommentListScreenlet
                {...this.props}
                screenletAttributes={this.state}
            />
        );
    }

    // Events
    _onDeleteCommentSuccess(event) {
        if(!this.props.onDeleteCommentSuccess) {
            return;
        }
        this.props.onDeleteCommentSuccess(JSON.parse(event.commentEntry));
    }

    _onUpdateCommentSuccess(event) {
        if(!this.props.onUpdateCommentSuccess) {
            return;
        }
        this.props.onUpdateCommentSuccess(JSON.parse(event.commentEntry));
    }

    _onListPageFailed(event) {
        if(!this.props.onListPageFailed) {
            return;
        }
        this.props.onListPageFailed(event.error);
    }

    _onListPageReceived(event) {
        if(!this.props.onListPageReceived) {
            return;
        }
        this.props.onListPageReceived(JSON.parse(event.comments));
    }

    _onListItemSelected(event) {
        if(!this.props.onListItemSelected) {
            return;
        }
        this.props.onListItemSelected(JSON.parse(event.commentEntry));
    }

    _onError(event) {
        if(!this.props.onError) {
            return;
        }
        this.props.onError(event.error);
    }
}