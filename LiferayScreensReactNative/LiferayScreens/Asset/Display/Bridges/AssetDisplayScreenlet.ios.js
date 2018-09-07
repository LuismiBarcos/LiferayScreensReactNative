'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeAssetDisplayScreenlet = requireNativeComponent('AssetDisplayScreenlet');

export default class AssetDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetEntryId: props.assetEntryId || 0,
            className: props.className || "",
            classPK: props.classPK || 0,
            portletItemName: props.portletItemName || "",
            autoLoad: props.autoLoad || true
        }
    }
    render() {
        return(
            <NativeAssetDisplayScreenlet 
                {...this.props}
                screenletAttributes={this.state}
                onAssetResponse={this._onAssetResponse.bind(this)}
                onAssetError={this._onAssetError.bind(this)}
                onConfigureScreenlet={this._onConfigureScreenlet.bind(this)}
                onAsset={this._onAsset.bind(this)}
            />
        );
    }

    // Events
    _onAssetResponse(event) {
        if(!this.props.onAssetResponse) {
            return;
        }
        this.props.onAssetResponse(event.nativeEvent.asset);
    }

    _onAssetError(event) {
        if(!this.props.onAssetError) {
            return;
        }
        this.props.onAssetError(event.nativeEvent.error);
    }

    _onConfigureScreenlet(event) {
        if(!this.props.onConfigureScreenlet) {
            return;
        }
        this.props.onConfigureScreenlet(event.nativeEvent.childScreenlet ,event.nativeEvent.asset);
    }

    _onAsset(event) {
        if(!this.props.onAsset) {
            return;
        }
        this.props.onAsset(event.nativeEvent.asset);
    }
}