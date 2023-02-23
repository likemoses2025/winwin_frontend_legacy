import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {returnData} from '../../../assets/data/ReturnData.js';
import ReturnItem from './ReturnItem';
import {SectionGrid} from 'react-native-super-grid';

const ReturnScreen = () => {
  const renderItem = ({item}) => (
    <View style={{padding: 10}}>
      <Text>{item.Product_no}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={returnData}
        renderItem={renderItem}
        keyExtractor={item => item.product_no.toString()}
      />
    </View>
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({});
