import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Main from './src/navigations/Main';
import { store } from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  )
}

export default App