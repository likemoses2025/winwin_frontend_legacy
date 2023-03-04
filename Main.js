import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/main/MainScreen';
import OrderScreen from './src/screens/orders/OrderScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import Ionic from 'react-native-vector-icons/Ionicons';
import ReturnCreate from './src/screens/returns/ReturnCreate';

const Main = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    const tabcolor = '#FF9500';
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === '홈') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              colour = tabcolor;
            } else if (route.name === '주문') {
              iconName = focused ? 'cart' : 'cart-outline';
              colour = tabcolor;
            } else if (route.name === '반품') {
              iconName = focused ? 'ios-trash-bin' : 'ios-trash-bin-outline';
              colour = tabcolor;
            } else if (route.name === '내정보') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
              colour = tabcolor;
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="홈" component={MainScreen} />
        <Tab.Screen name="주문" component={OrderScreen} />
        {/* <Tab.Screen name="반품" component={ReturnScreen} /> */}
        <Tab.Screen name="반품" component={ReturnCreate} />
        <Tab.Screen name="내정보" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
