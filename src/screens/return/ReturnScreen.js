import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {returnData} from '../../../assets/datas/ReturnData';

const ReturnScreen = () => {
  console.log(returnData);
  return (
    <View>
      {returnData.map((index, returndata) => {
        <View>
          <Text>{returndata.product_returnName}</Text>
        </View>;
      })}
    </View>
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({});
