'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeAssetDisplayScreenlet = requireNativeComponent('AssetDisplayScreenlet');

export default class AssetDisplayScreenlet extends Component {
    constructor(props) {
        super(props);
        this.screenletAttributes = {
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
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}