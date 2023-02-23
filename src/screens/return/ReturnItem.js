import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReturnItem = ({item}) => {
  const {product_returnName} = item;
  return (
    <View>
      <Text>{product_returnName}</Text>
    </View>
  );
};

export default ReturnItem;

const styles = StyleSheet.create({});
