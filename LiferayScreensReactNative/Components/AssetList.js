'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { AssetListScreenlet } from "./../LiferayScreens";

export default class AssetList extends Component {
    render() {
        return(
            <AssetListScreenlet 
                {...this.props}
                style={styles.assets}
                classNameId={20015}
                theme={"custom"}
                // iOS Event
                onAssetListResponse={this._onAssetListResponse}
                onAssetListError={this._onAssetListError}
                // Android Event
                onListPageReceived={this._onListPageReceived}
                onListPageFailed={this._onListPageFailed}
            />
        );
    }

    _onAssetListResponse(assets) {
        console.log('USUARIO --> _onAssetListResponse ', assets);
    }

    _onAssetListError(error) {
        console.log('USUARIO --> _onAssetListError ', error);
    }

    _onListPageReceived(list) {
        console.log('USUARIO --> _onListPageReceived ', list);
    }
    
    _onListPageFailed(error) {
        console.log('USUARIO --> _onListPageFailed ', error);
    }
}

const styles = StyleSheet.create({
    assets: {
      height: 350,
      width: 400
    }
  });