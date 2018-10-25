'use strict'
import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { PdfDisplayScreenlet } from "./../LiferayScreens";

export default class PdfDisplay extends Component {
    render() {
        return(
            <PdfDisplayScreenlet 
                style={styles.pdf}
                className={"com.liferay.document.library.kernel.model.DLFileEntry"}
                classPK={38930}
                // iOS Events
                onFileAssetResponse={this._onFileAssetResponse}
                // Android Events
                onRetrieveAssetSuccess={this._onRetrieveAssetSuccess}
            />
        );
    }

    _onFileAssetResponse(url) {
        console.log('USUARIO --> _onFileAssetResponse ', url);
    }

    _onRetrieveAssetSuccess(assetEntry) {
        console.log('USUARIO --> _onRetrieveAssetSuccess ', assetEntry);
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    pdf: {
      height: height,
      width: width
    }
  });