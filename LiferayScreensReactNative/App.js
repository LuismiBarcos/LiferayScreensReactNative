/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View,
  NativeModules
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import UserPortrait from './Components/UserPortrait';
import ImageGallery from './Components/ImageGallery'
import CommentList from './Components/CommentList';
import SignUp from './Components/SignUp';
import Rating from './Components/Rating';
import ForgotPassword from './Components/ForgotPassword';
import DDLForm from './Components/DDLForm';
import WebContentDisplay from './Components/WebContentDisplay';
import ImageDisplay from './Components/ImageDisplay';
import VideoDisplay from './Components/VideoDisplay';
import AudioDisplay from './Components/AudioDisplay';
import CommentDisplay from './Components/CommentDisplay';
import CommentAdd from './Components/CommentAdd';
import PdfDisplay from './Components/PdfDisplay';
import AssetList from './Components/AssetList';
import AssetDisplay from './Components/AssetDisplay';
import WebContentList from './Components/WebContentList';
import BlogsEntryDisplay from './Components/BlogsEntryDisplay';
import DDLList from './Components/DDLList';
import FileDisplay from './Components/FileDisplay';
import Web from './Components/Web';
import TestComponent from './Components/TestComponent';

const ScreenletsStack = StackNavigator({
  HomeScreen:{ screen: HomeScreen },
  UserPortrait:{ screen: UserPortrait },
  ImageGallery:{ screen: ImageGallery},
  CommentList:{ screen: CommentList },
  SignUp:{ screen: SignUp },
  Rating:{ screen: Rating },
  ForgotPassword: {screen: ForgotPassword },
  DDLForm: { screen: DDLForm },
  WebContentDisplay: { screen: WebContentDisplay },
  ImageDisplay: { screen: ImageDisplay },
  VideoDisplay: { screen: VideoDisplay },
  AudioDisplay: { screen: AudioDisplay },
  CommentDisplay: { screen: CommentDisplay },
  CommentAdd: { screen: CommentAdd },
  PdfDisplay: { screen: PdfDisplay},
  AssetList: { screen: AssetList},
  AssetDisplay: { screen: AssetDisplay},
  WebContentList: { screen: WebContentList},
  BlogsEntryDisplay: { screen: BlogsEntryDisplay},
  DDLList: { screen: DDLList},
  FileDisplay: { screen: FileDisplay},
  Web: { screen: Web},
  TestComponent: { screen: TestComponent}
});

export default class App extends Component {
  render() {
      return (
        <ScreenletsStack />
      );
  }
}
