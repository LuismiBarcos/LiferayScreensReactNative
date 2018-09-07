'use strict'
import React, {Component} from 'react';
import { View ,ScrollView, StyleSheet, Text } from 'react-native';

import { UserPortraitScreenlet } from './../LiferayScreens';
import { CommentListScreenlet } from './../LiferayScreens';
import { ImageGalleryScreenlet } from './../LiferayScreens';

export default class TestComponent extends Component {
    render(){
        return(
            <View>
                <UserPortraitScreenlet 
                    style={styles.comments}
                    userId={20156}
                />
                <ImageGalleryScreenlet 
                        style={styles.gallery}
                        folderId={72155}
                        repositoryId={20143}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    comments: {
        height: 150,
        width: 150,
    },
    gallery: {
        height: 300,
        width: 300
      }
});