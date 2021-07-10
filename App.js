
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputOTPScreen from './authentication/inputOTPScreen';
import AuthenticationScreen from './authentication/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';


import Navigation from './Navigation';
const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Authentication">
      <Stack.Screen 
      name="Authentication" 
      component={AuthenticationScreen}
       />
      <Stack.Screen 
      name="InputOTP" 
      component={InputOTPScreen}
      options={{title:'Input OTP',headerBackTitle:''}} 
      />
      <Stack.Screen
       name="Home" 
       component={HomeScreen} 
       options={{title:'Home',headerBackTitle:''}} 
       />
      </Stack.Navigator>
    </NavigationContainer>

   //<Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
