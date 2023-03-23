import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Heading from '../../../components/Heading';
import {defaultStyle, plusIcon} from '../../../styles/styles';

const ReturnScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={defaultStyle}>
      <Heading text2="반품리스트" />
      <TouchableOpacity
        style={plusIcon}
        onPress={() => navigation.navigate('ReturnCreate')}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({});
