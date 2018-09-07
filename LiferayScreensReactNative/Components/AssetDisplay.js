'use strict'
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { AssetDisplayScreenlet } from "./../LiferayScreens";

export default class AssetDisplay extends Component {
    render(){
        return(
            <AssetDisplayScreenlet 
                {...this.props}
                style={styles.asset}
                className={"com.liferay.blogs.kernel.model.BlogsEntry"}
                classPK={40515}
            />
        );
    }
}

const styles = StyleSheet.create({
    asset: {
      height: 350,
      width: 400
    }
});