import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OrderScreen from './src/screens/orders/OrderScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';

import Ionic from 'react-native-vector-icons/Ionicons';

import ReturnCreate from './src/screens/returns/ReturnCreate';
import ReturnScreen from './src/screens/returns/ReturnScreen';
import ReturnConfirm from './src/screens/returns/ReturnConfirm';
import AdminPanel from './src/screens/admin/AdminPanel';
import ChangePassword from './src/screens/profile/ChangePassword';
import Camera from './src/screens/camera/Camera';
import EditProfile from './src/screens/profile/EditProfile';
import MainScreen from './src/screens/main/MainScreen';
import LoginScreen from './src/screens/account/LoginScreen';
import RegisterScreen from './src/screens/account/RegisterScreen';

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
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              colour = tabcolor;
            } else if (route.name === 'Orders') {
              iconName = focused ? 'cart' : 'cart-outline';
              colour = tabcolor;
            } else if (route.name === 'Returns') {
              iconName = focused ? 'ios-trash-bin' : 'ios-trash-bin-outline';
              colour = tabcolor;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
              colour = tabcolor;
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Returns" component={ReturnScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ReturnCreate" component={ReturnCreate} />
        <Stack.Screen name="ReturnConfirm" component={ReturnConfirm} />
        <Stack.Screen name="ReturnScreen" component={ReturnScreen} />
        <Stack.Screen name="AdminPanel" component={AdminPanel} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
