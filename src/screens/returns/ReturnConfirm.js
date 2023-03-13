import React, {useState} from 'react';
import {View} from 'react-native';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';
import SelectMenu from '../../components/common/SelectMenu';

const ReturnConfirm = ({route}) => {
  const submitData = route.params?.submitData;
  console.log('SubmitData', submitData);
  console.log('gunnySackNumber', gunnySackNumber);
  console.log('yearMonth', yearMonth);

  return (
    <View>
      <SelectMenu />
    </View>
  );
};

export default ReturnConfirm;
