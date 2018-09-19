'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeAssetListScreenlet = requireNativeComponent('AssetListScreenlet');

export default class AssetListScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
            groupId: props.groupId || 0,
            classNameId: props.classNameId || 0,
            portletItemName: props.portletItemName || "",
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25
        }
    }
    render(){
        return(
            <NativeAssetListScreenlet 
                {...this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}