import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";

import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import LoginOTP from './src/Screens/LoginOTP';
import RegisterOTP from './src/Screens/RegisterOTP';
import BottomTabNavigator from './src/Component/BottomTabNavigator';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigator' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOTP" component={LoginOTP} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}