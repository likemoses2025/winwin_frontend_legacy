import {View, Text} from 'react-native';
import React from 'react';

const ReturnConfirm = submitData => {
  console.log('입력데이터', submitData);
  return (
    <View>
      <Text>ReturnConfirm</Text>
      {/* {submitData.map((item, index) => (
        <Text key={index}>{item.submitData.product_name}</Text>
      ))} */}
    </View>
  );
};

export default ReturnConfirm;
