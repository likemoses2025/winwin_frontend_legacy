import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultStyle} from '../../../styles/styles';

const MainScreen = () => {
  return (
    <SafeAreaView style={{...defaultStyle, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text>MainScreen22222</Text>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
