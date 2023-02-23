/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ReturnScreen from './src/screens/return/ReturnScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <ReturnScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
