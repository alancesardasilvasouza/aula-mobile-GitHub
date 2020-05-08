
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from './HomeScreen';
import  DetailScreen from './DetailScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
        <Stack.Screen name="Detail" options={{ title: 'Resultado da Pesquisa' }} component={DetailScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


