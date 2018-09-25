'use strict'
import React, {Component} from 'react';
import { View ,ScrollView,Dimensions ,StyleSheet, Text } from 'react-native';

import { ImageDisplayScreenlet } from './../../LiferayScreens';
import { CommentListScreenlet } from './../../LiferayScreens';

import CommentAdd from './../CommentAdd';
export default class DemoPage1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classPK: this.props.navigation.getParam('imageClassPK', 54498)
        };
    }
    
    render() {
        return(
            <View style={styles.container}>
                <ImageDisplayScreenlet
                    style={styles.image}
                    className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                    classPK={parseInt(this.state.classPK)}
                    // iOS Events
                    onFileAssetResponse={this._onFileAssetResponse}
                    // Android Events
                    onRetrieveAssetSuccess={this._onRetrieveAssetSuccess}
                />
                <CommentListScreenlet 
                    style={styles.comments}
                    className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                    classPK={parseInt(this.state.classPK)}
                />
                <CommentAdd 
                    style={styles.commentAdd}
                    className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                    classPK={parseInt(this.state.classPK)}
                />
            </View>
        );
    }

    _onFileAssetResponse(url) {
        console.log('USUARIO --> _onFileAssetResponse ', url);
      }
    
      _onRetrieveAssetSuccess(assetEntry) {
        console.log('USUARIO --> _onFileAssetResponse ', assetEntry);
      }
}

const {height ,width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: 250,
        width: width,
    },
    comments: {
        height: height - 380,
        width: width,
    },
    commentAdd: {
        height: 60,
        width: width,
    }
});