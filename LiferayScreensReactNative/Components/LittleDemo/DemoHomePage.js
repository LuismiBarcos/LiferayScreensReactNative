'use strict'
import React, {Component} from 'react';
import { View ,ScrollView,Dimensions ,StyleSheet, Text } from 'react-native';

import { UserPortraitScreenlet } from './../../LiferayScreens';
import { ImageGalleryScreenlet } from './../../LiferayScreens';

export default class DemoHomePage extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <UserPortraitScreenlet 
                    style={styles.portrait}
                    userId={20156}
                />
                <ImageGalleryScreenlet 
                    style={styles.gallery}
                    folderId={72155}
                    repositoryId={20143}
                    // common events
                    onItemSelected={this._onItemSelected.bind(this)}
                />
            </View>
        );
    }

    _onItemSelected(image) {
        this.props.navigation.navigate('DemoPage1',{ imageClassPK: image.fileEntryId });
    }
}
const {height ,width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    portrait: {
        height: 150,
        width: 150,
    },
    gallery: {
        height: height - 210,
        width: width,
    },
    image: {
        height: 500,
        width: width,
    }
});