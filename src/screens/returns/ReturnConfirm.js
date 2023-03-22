import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';
import Header from '../../../components/Header';
import Table from '../../../components/Table';
import {colors, defaultStyle} from '../../../styles/styles';

const ReturnConfirm = ({route}) => {
  const filteredInputData = route.params?.inputData;
  const navigation = useNavigation();
  const [sumBox, setSumBox] = useState('');
  const [sumPrice, setSumPrice] = useState('');
  const [selectedGunnySack, setSelectedGunnySack] = useState('');
  const [selectedYearMonth, setSelectedYearMonth] = useState('');

  const submitData = {
    selectedGunnySack,
    selectedYearMonth,
    sumBox,
    sumPrice,
    filteredInputData,
  };

  // 전체 수량, 전체 금액 계산
  useEffect(() => {
    const totalBox = filteredInputData.reduce((acc, data) => {
      return acc + data.returnCount;
    }, 0);

    setSumBox(totalBox);
    const totalPrice = filteredInputData.reduce((acc, data) => {
      const sum = data.returnCount * data.product_returnPrice;
      return acc + sum;
    }, 0);
    setSumPrice(totalPrice);
  }, [filteredInputData, sumBox, sumPrice]);

  const formattedSumPrice = parseInt(sumPrice)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  console.log('filteredInputData', filteredInputData);
  console.log(Number(sumBox), sumPrice);

  const submitHandler = () => {
    console.log('SUBMIT DATA', submitData);
    console.log('Submit');
  };

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

      {/* Table Data */}
      <Text
        style={{
          paddingTop: 30,
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '500',
        }}>
        등록내역
      </Text>
      <View
        style={{
          height: '50%',
          borderWidth: 0.3,
          borderColor: '#333333',
          borderRadius: 10,
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Table data={filteredInputData} />
      </View>

      <View
        style={{
          backgroundColor: '#EEEEEE',
          borderWidth: 0.2,
          borderRadius: 5,
          margin: 20,
          padding: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            flex: 4,
            textAlign: 'center',
            fontWeight: '800',
            color: colors.color3,
          }}>
          합계 :{' '}
        </Text>
        <Text style={{flex: 1, fontWeight: '800', color: colors.color3}}>
          {sumBox}
        </Text>
        <Text style={{flex: 1, fontWeight: '800', color: colors.color3}}>
          {formattedSumPrice}
        </Text>
      </View>
      <TouchableOpacity style={{marginTop: 40}} onPress={submitHandler}>
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
