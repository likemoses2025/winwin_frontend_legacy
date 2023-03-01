import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SectionGrid} from 'react-native-super-grid';
import returnProductData from '../../../assets/datas/ReturnProductData';

const ReturnCreate = () => {
  const [number, onChangeNumber] = useState('');

  const renderItem = ({item}) => {
    return (
      <View>
        {/* <Text>{item.product_returnName}</Text> */}

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={item.product_returnName}
          keyboardType="numeric"
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>반품 등록하기</Text>
        <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          <FlatList
            data={returnProductData}
            renderItem={renderItem}
            keyExtractor={item => item.product_no.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReturnCreate;

const styles = StyleSheet.create({
  title: {fontSize: 20, justifyContent: 'center', alignItems: 'center'},
  input: {
    height: 40,
    width: 130,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
