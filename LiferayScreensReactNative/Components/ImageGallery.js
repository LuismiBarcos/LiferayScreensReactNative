'use-strict'
import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'

import { ImageGalleryScreenlet } from './../LiferayScreens';

export default class ImageGallery extends Component {
    render() {
        return(
            <View >
                <ImageGalleryScreenlet 
                    style={styles.gallery}
                    folderId={72155}
                    repositoryId={20143}
                    // common events
                    onItemSelected={this._onItemSelected}
                    // iOS events
                    onContentsReceived={this._onContentsReceived}
                    // android events
                    onListPageReceived={this._onListPageReceived}
                />
            </View>
        );
    }

    _onItemSelected(image) {
        console.log('USUARIO --> _onItemSelected ', image);
    }

    _onContentsReceived(images) {
        console.log('USUARIO --> _onContentsReceived ', images);
    }

    _onListPageReceived(images) {
        console.log('USUARIO --> _onListPageReceived ', images);
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    gallery: {
      height: height - 55,
      width: width
    }
});