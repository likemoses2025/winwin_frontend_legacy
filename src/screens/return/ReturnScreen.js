import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {returnData} from '../../../assets/datas/ReturnData';
import ReturnItem from './ReturnItem';

const ReturnScreen = () => {
  return (
    <View>
      <Text>Hello</Text>
      {returnData.map((index, item) => {
        <View key={item.product_no}>
          <ReturnItem item={item} />
        </View>;
      })}
    </View>
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({});
