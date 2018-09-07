'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeAssetListScreenlet = requireNativeComponent('AssetListScreenlet');

export default class AssetListScreenlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                screenletAttributes={this.state}
                onAssetListResponse={this._onAssetListResponse.bind(this)}
                onAssetListError={this._onAssetListError.bind(this)}
                onAssetSelected={this._onAssetSelected.bind(this)}
            />
        );
    }

    // Events
    _onAssetListResponse(event) {
        if(!this.props.onAssetListResponse) {
            return;
        }
        this.props.onAssetListResponse(event.nativeEvent.assets);
    }

    _onAssetListError(event) {
        if(!this.props.onAssetListError) {
            return;
        }
        this.props.onAssetListError(event.nativeEvent.error);
    }

    _onAssetSelected(event) {
        if(!this.props.onAssetSelected) {
            return;
        }
        this.props.onAssetSelected(event.nativeEvent.asset);
    }
}