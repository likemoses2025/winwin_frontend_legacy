import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';
import Header from '../../../components/Header';
import Table from '../../../components/Table';
import {colors, defaultStyle} from '../../../styles/styles';

const ReturnConfirm = ({route}) => {
  const navigation = useNavigation();

  const filteredInputData = route.params?.inputData;
  console.log('필터데이터', filteredInputData);

  // 품목별 합계

  // 전체 수량, 전체 금액 계산

  console.log('filteredInputData', filteredInputData);

  const [selectedGunnySack, setSelectedGunnySack] = useState('');
  const [selectedYearMonth, setSelectedYearMonth] = useState('');

  return (
    <View style={{...defaultStyle, padding: 0}}>
      <Header back={true} />

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
      <View>
        <Text>합계수량: 1234</Text>
        <Text>합계금액: 234,345원</Text>
      </View>
      {/* Table Data */}
      <Text style={{paddingTop: 30}}>등록내역</Text>
      <View
        style={{
          height: '50%',
          borderWidth: 0.3,
          borderColor: '#333333',
          margin: 20,
        }}>
        <Table data={filteredInputData} />
      </View>
      <TouchableOpacity style={{marginTop: 40}}>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={'chevron-right'}>
          등록하기
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default ReturnConfirm;
