import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import returnProductData from '../../../assets/datas/ReturnProductData';
import {returnContainer, returnTitle} from '../../../styles/styles';
import ReturnEachItem from './ReturnEachItem';

const ReturnCreate = () => {
  const navigation = useNavigation();

  const [returnItemList, setReturnItemList] = useState(returnProductData);
  const [filteredReturnList, setFilteredReturnList] = useState([]);

  const changeReturnValue = useCallback(
    (product_sapcode, returnCount) => {
      const newReturnList = returnItemList.map(item =>
        item.product_sapcode === product_sapcode
          ? {...item, returnCount}
          : item,
      );
      setReturnItemList(newReturnList);
    },
    [returnItemList],
  );

  const filteredReturnInputData = e => {
    const submitData = returnItemList.filter(item => item.returnCount > 0);
    console.log('SubmitData', submitData);
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
          <Text>{filteredReturnList.product_no}1</Text>
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
