import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SectionGrid} from 'react-native-super-grid';
import returnProductData from '../../assets/data/ReturnProductData';

const ReturnScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{padding: 10}}>
        <Text>{item.product_returnName}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Return Page</Text>

      <FlatList
        data={returnProductData}
        renderItem={renderItem}
        keyExtractor={item => item.product_no.toString()}
      />
    </View>
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({});
