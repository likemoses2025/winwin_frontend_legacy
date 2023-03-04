import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {returnInput} from '../../../styles/styles';

const ReturnEachItem = ({item}) => {
  const [quantity, setQuantity] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={returnInput}
      onChangeText={text => setQuantity(text)}
      value={quantity}
      placeholder={item.product_returnName}
      keyboardType="numeric"
    />
  );
};

export default ReturnEachItem;
