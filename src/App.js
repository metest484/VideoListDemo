/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import VideoList from './Screens/VideoList'
import {
  StatusBar,
  View,
} from 'react-native';


const App = () => {
  return (
    <>
      <StatusBar backgroundColor="skyblue"
      barStyle="dark-content"/>
     
        <View>
          <VideoList/>
        </View>
   
   </>
  );
};



export default App;
