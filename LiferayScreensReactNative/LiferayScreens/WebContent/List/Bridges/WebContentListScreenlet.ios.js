'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeWebContentListScreenlet = requireNativeComponent('WebContentListScreenlet');

export default class WebContentListScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            groupId: props.groupId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }
    }
    render() {
        return(
            <NativeWebContentListScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}