import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Headline} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/Header';
import {defaultStyle, formHeading, plusIcon} from '../../../styles/styles';
import ReturnItem from './ReturnItem';

const ReturnScreen = () => {
  const navigation = useNavigation();
  const returnData = [
    // create an array called dummyData
    {
      // first object in the array
      _id: 'dkjfhksdf',
      date: '2021-01-01', // key 'date' with value '2021-01-01'
      gunnyNumber: 1, // key 'number' with value 1
      amount: 100, // key 'amount' with value 100
      box: 1000, // key 'value' with value 1000
      returnList: [
        {
          storeCode: 105678,
          sap_code: 435678,
          product_returnName: '불닭볶음면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 107678,
          sap_code: 435678,
          product_returnName: '삼양라면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 106678,
          sap_code: 435678,
          product_returnName: '볶음짜짜로니',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 104578,
          sap_code: 435678,
          product_returnName: '까르보불닭볶음면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 103578,
          sap_code: 435678,
          product_returnName: '사또밥',
          returnCount: 2,
          product_returnPrice: 567,
        },
      ],
    },
    {
      // first object in the array
      _id: 'dkjferehksdf',
      date: '2021-01-01', // key 'date' with value '2021-01-01'
      gunnyNumber: 1, // key 'number' with value 1
      amount: 100, // key 'amount' with value 100
      box: 1000, // key 'value' with value 1000
      returnList: [
        {
          storeCode: 105678,
          sap_code: 435678,
          product_returnName: '불닭볶음면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 107678,
          sap_code: 435678,
          product_returnName: '삼양라면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 106678,
          sap_code: 435678,
          product_returnName: '볶음짜짜로니',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 104578,
          sap_code: 435678,
          product_returnName: '까르보불닭볶음면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 103578,
          sap_code: 435678,
          product_returnName: '사또밥',
          returnCount: 2,
          product_returnPrice: 567,
        },
      ],
    },
    {
      // first object in the array
      _id: 'dkjf223hksdf',
      date: '2021-01-01', // key 'date' with value '2021-01-01'
      gunnyNumber: 1, // key 'number' with value 1
      amount: 100, // key 'amount' with value 100
      box: 1000, // key 'value' with value 1000
      returnList: [
        {
          storeCode: 105678,
          sap_code: 435678,
          product_returnName: '불닭볶음면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 107678,
          sap_code: 435678,
          product_returnName: '삼양라면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 106678,
          sap_code: 435678,
          product_returnName: '볶음짜짜로니',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 104578,
          sap_code: 435678,
          product_returnName: '까르보불닭볶음면',
          returnCount: 2,
          product_returnPrice: 567,
        },
        {
          storeCode: 103578,
          sap_code: 435678,
          product_returnName: '사또밥',
          returnCount: 2,
          product_returnPrice: 567,
        },
      ],
    },
  ];

  const loading = false;

  return (
    <View style={defaultStyle}>
      {/* <View style={defaultStyle}> */}
      <Header back={true} />
      {/* Heading */}
      <View style={{marginBottom: 20, paddingTop: 70}}>
        <Text style={formHeading}>Orders</Text>
      </View>

      <View style={{padding: 10, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {returnData.length > 0 ? (
            returnData.map((item, index) => (
              <ReturnItem
                key={item._id}
                id={item._id}
                i={index}
                date={item.date}
                gunnyNumber={item.gunnyNumber}
                amount={item.amount}
                box={item.box}
                return={item.return}
              />
            ))
          ) : (
            <Headline style={{textAlign: 'center'}}>No Returns Yet</Headline>
          )}
        </ScrollView>
        {/* </View> */}
      </View>
      <TouchableOpacity
        style={plusIcon}
        onPress={() => navigation.navigate('ReturnCreate')}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ReturnScreen;
