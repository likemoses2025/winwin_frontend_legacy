import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {colors} from '../../../styles/styles';

const ReturnItem = ({
  id,
  date,
  gunnyNumber,
  amount,
  box,
  returnList,
  admin = false,
  loading,
  i = 0,
}) => {
  const updateHandler = () => {};

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
      }}>
      <Text
        style={{
          ...styles.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}>
        ID - #{id}
      </Text>
      <TextBox title={'Date'} value={date} i={i} />
      <TextBox title={'GunnyNumber'} value={gunnyNumber} i={i} />
      <TextBox title={'Amount'} value={amount} i={i} />
      <TextBox title={'Box'} value={box} i={i} />

      {admin && (
        <Button
          icon={'update'}
          mode={'contained'}
          textColor={i % 2 === 0 ? colors.color2 : colors.color3}
          style={{
            width: 120,
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}>
          Update
        </Button>
      )}
    </View>
  );
};

const TextBox = ({title, value, i}) => (
  <Text
    style={{
      marginVertical: 6,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
    }}>
    <Text
      style={{
        fontWeight: '900',
        color: i % 2 === 0 ? colors.color3 : colors.color2,
      }}>
      {title} -{' '}
    </Text>
    {value}
    {title === 'Price' ? '원' : ''}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: '900',
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default ReturnItem;
