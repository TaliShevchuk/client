import  React, { useState,useEffect} from 'react';
import {StyleSheet,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TabsNavigator} from './src/navigation/index';
import {DefaultTheme , Provider} from 'react-native-paper';
import AppColors from './src/components/AppColors';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    secondaryContainer: AppColors.white
  }
}

export default function App() {
  return (
    <Provider theme = {theme}>
      <NavigationContainer>
        <TabsNavigator/>
      </NavigationContainer>
    </Provider>
  );
}