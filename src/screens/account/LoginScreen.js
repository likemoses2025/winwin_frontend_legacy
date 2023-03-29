import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useMessageAndErrorUser} from '../../../utils/hooks';
import {login} from '../../../redux/actions/loginAction';
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
} from '../../../styles/styles';
import Footer from '../../../components/Footer';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const loading = useMessageAndErrorUser(navigation, dispatch, 'profile');

  const submitHandler = () => {
    dispatch(login(email, password));
  };
  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{marginBottom: 20}}>
          <Text style={formHeading}>Login</Text>
        </View>

        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('forgetpassword')}>
            <Text style={formStyles.forget}>Forget Password?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === '' || password === ''}
            style={formStyles.btn}
            onPress={submitHandler}>
            Log In
          </Button>

          <Text style={formStyles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={formStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default LoginScreen;
