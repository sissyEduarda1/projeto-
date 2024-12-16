import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';  // Importando a terceira tela

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Ocultar o cabeçalho da tela inicial
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Segunda Tela',
            headerStyle: { backgroundColor: '#28a745' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}  // Registrando a terceira tela
          options={{
            title: 'Escolha a opção',
            headerStyle: { backgroundColor: '#28a745' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
