import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Main from './src/navigations/Main';

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}

export default App