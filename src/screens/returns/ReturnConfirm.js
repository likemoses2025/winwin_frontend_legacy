import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';
import SelectDropdown from 'react-native-select-dropdown';

const ReturnConfirm = ({route, navigation}) => {
  const filteredInputData = route.params?.inputData;
  const [filterData, setFilterData] = useState('');

  const navigate = useNavigation();

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  // 품목별 합계

  // 전체 수량, 전체 금액 계산

  console.log('filterData', filterData);
  console.log('gunnySackNumber', gunnySackNumber);
  console.log('yearMonth', yearMonth);

  return (
    <View style={{marginTop: 100}}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>ReturnConfirm</Text>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default ReturnConfirm;
