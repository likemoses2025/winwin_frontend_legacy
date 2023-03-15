import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';

const ReturnEachItem = ({item, changeReturnValue}) => {
  const {product_sapcode, product_returnName} = item;

  const [isFocused, setIsFocused] = useState(false);
  const [returnCount, setReturnCount] = useState('');

  const moveText = useRef(new Animated.Value(0)).current;

  const onChangeCount = e => {
    const text = e.nativeEvent;
    setReturnCount(e.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    changeReturnValue(product_sapcode, parseInt(returnCount));
  }, [returnCount]);

  useEffect(() => {
    if (isFocused === true || returnCount !== '') {
      moveTextTop();
    } else if (isFocused === false || returnCount === '') {
      moveTextBottom();
    }
  }, [returnCount, moveTextTop, moveTextBottom, isFocused]);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    if (returnCount === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [moveText]);

  const moveTextBottom = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsFocused(false);
  }, [moveText]);

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -22],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  const activeLabelStyle = {
    color: !isFocused ? '#aaa' : '#006aff',
    fontSize: !isFocused ? 14 : 12,
  };

  const activeInputStyle = {
    borderColor: !isFocused ? '#aaa' : '#ff7d0d',
  };

  // '#ff7d0d'

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text
          style={[styles.label, activeLabelStyle]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {product_returnName}
        </Text>
      </Animated.View>
      <TextInput
        style={[styles.input, activeInputStyle]}
        autoCapitalize={'none'}
        value={returnCount}
        onChangeText={text => onChangeCount(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
        keyboardType="numeric"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: 10},
  input: {
    width: 150,
    height: 40,
    marginTop: 20,
    fontSize: 15,
    color: '#006aff',
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 10,
    textAlign: 'center',
  },
  label: {
    color: 'grey',
    fontSize: 12,
    width: 148,
    marginLeft: 1,
  },
  animatedStyle: {
    top: 25,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 1,
  },
});

export default ReturnEachItem;
