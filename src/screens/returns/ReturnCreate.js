import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SectionGrid} from 'react-native-super-grid';
import returnProductData from '../../../assets/datas/ReturnProductData';
import ReturnEachItem from './ReturnEachItem';
import {returnTitle} from '../../../styles/styles';

const ReturnCreate = () => {
  const [returnItem, setReturnItem] = useState([]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={returnTitle}>반품 등록하기</Text>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            {returnProductData.map(item => (
              <View key={item.product_no}>
                <ReturnEachItem item={item} setReturnItem={setReturnItem} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReturnCreate;

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 130,
    margin: 7,
    borderWidth: 1,
    padding: 10,
  },
});
