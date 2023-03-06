import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ReturnScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Return Screen</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: '#ff7d0d',
        }}
        onPress={() => navigation.navigate('ReturnCreate')}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({});
