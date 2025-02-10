import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import PatientRegisterScreen from './screens/PatientRegisterScreen'; // Tela de registro do paciente
import PatientLoginScreen from './screens/PatientLoginScreen'; // Tela de login do paciente
import DoctorLoginScreen from './screens/DoctorLoginScreen'; // Tela de login do médico
import PatientMainScreen from './screens/PatientMainScreen'; // Tela principal do paciente
import CategoriesScreen from './screens/CategoriesScreen'; // Tela de categorias
import FisioterapiaEsportivaScreen from './screens/FisioterapiaEsportivaScreen'; // Tela de fisioterapia esportiva
import FisioterapiaBracoScreen from './screens/FisioterapiaBracoScreen'; // Tela de fisioterapia do braço
import FisioterapiaPernaScreen from './screens/FisioterapiaPernaScreen'; // Tela de fisioterapia da perna
import FisioterapiaCostasScreen from './screens/FisioterapiaCostasScreen'; // Tela de fisioterapia das costas

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Tela Inicial */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} // Sem cabeçalho
        />

        {/* Segunda Tela */}
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ headerShown: false }} // Sem cabeçalho
        />

        {/* Terceira Tela */}
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{ headerShown: false }} // Sem cabeçalho
        />

        {/* Tela de Login do Paciente */}
        <Stack.Screen
          name="PatientLoginScreen"
          component={PatientLoginScreen}
          options={{
            title: 'Login do Paciente',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Registro do Paciente */}
        <Stack.Screen
          name="PatientRegisterScreen"
          component={PatientRegisterScreen}
          options={{
            title: 'Registro de Paciente',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Login do Médico */}
        <Stack.Screen
          name="DoctorLoginScreen"
          component={DoctorLoginScreen}
          options={{
            title: 'Login Médico',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela Principal do Paciente */}
        <Stack.Screen
          name="PatientMainScreen"
          component={PatientMainScreen}
          options={{
            title: 'Tela Principal',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Categorias */}
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: 'Categorias',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Fisioterapia Esportiva */}
        <Stack.Screen
          name="FisioterapiaEsportivaScreen"
          component={FisioterapiaEsportivaScreen}
          options={{
            title: 'Fisioterapia Esportiva',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Fisioterapia do Braço */}
        <Stack.Screen
          name="FisioterapiaBracoScreen"
          component={FisioterapiaBracoScreen}
          options={{
            title: 'Fisioterapia do Braço',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Fisioterapia da Perna */}
        <Stack.Screen
          name="FisioterapiaPernaScreen"
          component={FisioterapiaPernaScreen}
          options={{
            title: 'Fisioterapia da Perna',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Tela de Fisioterapia das Costas */}
        <Stack.Screen
          name="FisioterapiaCostasScreen"
          component={FisioterapiaCostasScreen}
          options={{
            title: 'Fisioterapia das Costas',
            headerStyle: { backgroundColor: '#0DB575' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
