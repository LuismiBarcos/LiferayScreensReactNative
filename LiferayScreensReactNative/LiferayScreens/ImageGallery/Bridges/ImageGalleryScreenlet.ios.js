'use strict'
import React, {Component} from 'react';
import { requireNativeComponent } from 'react-native'

const NativeImageGalleryScreenlet = requireNativeComponent('ImageGalleryScreenlet');

export default class ImageGalleryScreenlet extends Component {
    constructor(props){
        super(props);

        this.screenletAttributes = {
            repositoryId: props.repositoryId || 0,
            folderId: props.folderId || 0,
            autoLoad: props.autoLoad || true,
            refreshControl: props.refreshControl || true,
            firstPageSize: props.firstPageSize || 50,
            pageSize: props.pageSize || 25,
            theme: props.theme || ""
        }
    }

    render() {
        return (
            <NativeImageGalleryScreenlet 
                {... this.props}
                screenletAttributes={this.screenletAttributes}
            />
        );
    }
}
