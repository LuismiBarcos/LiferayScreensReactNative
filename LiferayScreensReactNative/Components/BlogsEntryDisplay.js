'use strict'
import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { BlogsEntryDisplayScreenlet } from "./../LiferayScreens";

export default class BlogsEntryDisplay extends Component {
    render(){
        return(
            <BlogsEntryDisplayScreenlet 
                {...this.props}
                style={styles.blogs}
                // assetEntryId={40516}
                classPK={40515}
                className={"com.liferay.blogs.kernel.model.BlogsEntry"} // -> Only for android
            />
        );
    }
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    blogs: {
      height: height,
      width: width
    }
});