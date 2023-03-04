import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';

const ReturnEachItem = ({
  item: {product_sapcode, product_returnName, product_returnPrice},
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [product_returnCount, setProduct_returnCount] = useState('');

  const moveText = useRef(new Animated.Value(0)).current;

  const onChangeCount = e => {
    const {text} = e.nativeEvent;
    setProduct_returnCount(text.replace(/[^0-9]/g, ''));
  };

  const handleInputChange = text => {
    setProduct_returnCount(text.replace(/[^0-9]/g, '')); // 숫자 이외의 값은 모두 제거
  };

  // useEffect(() => {
  //   if (product_returnCount !== '') {
  //     moveTextTop();
  //     setIsFocused(true);
  //   } else if (product_returnCount === '') {
  //     moveTextBottom();
  //     setIsFocused(false);
  //   }
  // }, [product_returnCount, moveTextTop, moveTextBottom]);

  useEffect(() => {
    if (isFocused === true || product_returnCount !== '') {
      setIsFocused(true);
      moveTextTop();
    } else if (isFocused === false || product_returnCount === '') {
      setIsFocused(false);
      moveTextBottom();
    }
  }, [product_returnCount, moveTextTop, moveTextBottom, isFocused]);

  const onFocusHandler = () => {
    // if (product_returnCount !== '') {
    //   moveTextTop();
    // }
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    if (product_returnCount === '') {
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
        value={product_returnCount}
        onChange={onChangeCount}
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
    marginLeft: 10,
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
