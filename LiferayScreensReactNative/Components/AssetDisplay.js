'use strict'
import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { AssetDisplayScreenlet } from "./../LiferayScreens";

export default class AssetDisplay extends Component {
    render(){
        return(
            <AssetDisplayScreenlet 
                {...this.props}
                style={styles.asset}
                className={"com.liferay.blogs.kernel.model.BlogsEntry"}
                classPK={40515}
                theme={"custom"}
                // iOS Events
                onAssetResponse={this._onAssetResponse}
                // Android Events
                onRetrieveAssetSuccess={this._onRetrieveAssetSuccess}
            />
        );
    }

    _onAssetResponse(asset) {
        console.log('USUARIO --> _onAssetResponse ', asset);
    }

    _onRetrieveAssetSuccess(assetEntry) {
        console.log('USUARIO --> _onRetrieveAssetSuccess ', assetEntry);
    }
}
var { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
    asset: {
      height: height,
      width: width
    }
});