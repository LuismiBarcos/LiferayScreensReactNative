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
                />
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    gallery: {
      height: height - 55,
      width: width
    }
});