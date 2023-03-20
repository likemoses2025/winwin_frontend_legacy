import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';
import SelectDropdown from 'react-native-select-dropdown';

const ReturnConfirm = ({route, navigation}) => {
  const navigate = useNavigation();

  const filteredInputData = route.params?.inputData;

  // 품목별 합계

  // 전체 수량, 전체 금액 계산

  console.log('filteredInputData', filteredInputData);

  const [selectedGunnySack, setSelectedGunnySack] = useState('');
  const [selectedYearMonth, setSelectedYearMonth] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Text style={{fontSize: 40}}>뒤로가기</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          padding: 30,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>년월</Text>
          <SelectDropdown
            data={yearMonth.map(item => item.label)}
            onSelect={(selectedItem, index) => {
              setSelectedYearMonth(selectedItem);
              console.log('선택된 년월', selectedYearMonth);
            }}
            defaultButtonText="23년 3월"
            buttonText={selectedYearMonth || '선택하기'}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: '#EEEEEE',
              paddingHorizontal: 16,
              paddingVertical: 12,
              width: 150,
            }}
            buttonTextStyle={{color: '#333333', fontSize: 16}}
            dropdownStyle={{borderRadius: 10, marginTop: -10}}
          />
        </View>
        <View>
          <Text>마대번호</Text>
          <SelectDropdown
            data={gunnySackNumber.map(item => item.label)}
            onSelect={(selectedItem, index) => {
              setSelectedGunnySack(selectedItem);
              console.log('선택된 마대번호', selectedGunnySack);
            }}
            defaultButtonText="1번"
            buttonText={selectedGunnySack || '선택하기'}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: '#EEEEEE',
              paddingHorizontal: 16,
              paddingVertical: 12,
              width: 150,
            }}
            buttonTextStyle={{color: '#333333', fontSize: 16}}
            dropdownStyle={{borderRadius: 10, marginTop: -10}}
          />
        </View>
      </View>

      {/* Table Data */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default ReturnConfirm;
