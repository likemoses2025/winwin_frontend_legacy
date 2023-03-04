import {
  FlatList,
  Pressable,
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
import {returnContainer, returnTitle} from '../../../styles/styles';

const ReturnCreate = () => {
  const [returnItem, setReturnItem] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Text style={returnTitle}>반품 등록하기</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={returnContainer}>
          {returnProductData.map(item => (
            <View key={item.product_no}>
              <ReturnEachItem item={item} setReturnItem={setReturnItem} />
            </View>
          ))}
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>등록하기</Text>
      </Pressable>
    </View>
  );
};

export default ReturnCreate;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 5,
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
