import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';

const ReturnConfirm = ({route}) => {
  const filteredInputData = route.params?.inputData;
  const [filterData, setFilterData] = useState('');

  // 품목별 합계

  // 전체 수량, 전체 금액 계산

  console.log('filterData', filterData);
  console.log('gunnySackNumber', gunnySackNumber);
  console.log('yearMonth', yearMonth);

  return (
    <View style={{marginTop: 100}}>
      <TouchableOpacity onPress={navigatiton.Back()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>ReturnConfirm</Text>
      {filteredInputData.map(item => (
        <Text>{item.product_no}</Text>
      ))}
    </View>
  );
};

export default ReturnConfirm;
