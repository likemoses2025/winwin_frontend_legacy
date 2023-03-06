import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SectionGrid} from 'react-native-super-grid';
import returnProductData from '../../../assets/datas/ReturnProductData';
import ReturnEachItem from './ReturnEachItem';
import {returnContainer, returnTitle} from '../../../styles/styles';
import {useNavigation} from '@react-navigation/native';

const ReturnCreate = () => {
  const navigation = useNavigation();

  const [returnInputData, setReturnInputData] = useState([]);
  const [returnItem, setReturnItem] = useState([]);
  const [filteredReturnList, setFilteredReturnList] = useState([]);

  const changeReturnValue = (product_sapcode, returnCount) => {
    const newReturnList = returnProductData.map(item =>
      item.product_sapcode === product_sapcode ? {...item, returnCount} : item,
    );
    setReturnInputData(newReturnList);
  };

  const filteredReturnInputData = e => {
    const submitData = returnInputData.filter(item => item.returnCount > 0);
    setFilteredReturnList(submitData);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {filteredReturnList.length > 0 ? (
        <View>
          <Text>Wow</Text>
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Text style={returnTitle}>반품 등록하기</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={returnContainer}>
              {returnProductData.map(item => (
                <View key={item.product_no}>
                  <ReturnEachItem
                    item={item}
                    changeReturnValue={changeReturnValue}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={filteredReturnInputData}>
            <Text style={styles.text}>등록하기</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ReturnCreate;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    width: '80%',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
