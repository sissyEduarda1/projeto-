import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import PatientRegisterScreen from './screens/PatientRegisterScreen'; 
import PatientLoginScreen from './screens/PatientLoginScreen'; 
import DoctorLoginScreen from './screens/DoctorLoginScreen'; 
import PatientMainScreen from './screens/PatientMainScreen'; 
import CategoriesScreen from './screens/CategoriesScreen'; 
import FisioterapiaEsportivaScreen from './screens/FisioterapiaEsportivaScreen'; 
import FisioterapiaBracoScreen from './screens/FisioterapiaBracoScreen'; 
import FisioterapiaPernaScreen from './screens/FisioterapiaPernaScreen'; 
import FisioterapiaCostasScreen from './screens/FisioterapiaCostasScreen'; 
import DoctorScreen from './screens/DoctorScreen'; 
import ChatScreen from './screens/ChatScreen'; 
import NotificationScreen from './screens/NotificationScreen'; 
import ExercicioDescricaoScreen from './screens/ExercicioDescricaoScreen';
import ExercicioDescricaoScreen1 from './screens/ExercicioDescricaoScreen1';
import ExercicioDescricaoScreen2 from './screens/ExercicioDescricaoScreen2';
import ExercicioDescricaoScreen3 from './screens/ExercicioDescricaoScreen3'; // Nova importação
import ExercicioDescricaoScreen4 from './screens/ExercicioDescricaoScreen4'; // Nova importação

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PatientLoginScreen" component={PatientLoginScreen} options={{ title: 'Login do Paciente', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="PatientRegisterScreen" component={PatientRegisterScreen} options={{ title: 'Registro de Paciente', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="DoctorLoginScreen" component={DoctorLoginScreen} options={{ title: 'Login Médico', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="PatientMainScreen" component={PatientMainScreen} options={{ title: 'Tela Principal', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ title: 'Categorias', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="FisioterapiaEsportivaScreen" component={FisioterapiaEsportivaScreen} options={{ title: 'Fisioterapia Esportiva', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="FisioterapiaBracoScreen" component={FisioterapiaBracoScreen} options={{ title: 'Fisioterapia do Braço', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="FisioterapiaPernaScreen" component={FisioterapiaPernaScreen} options={{ title: 'Fisioterapia da Perna', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="FisioterapiaCostasScreen" component={FisioterapiaCostasScreen} options={{ title: 'Fisioterapia das Costas', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="DoctorScreen" component={DoctorScreen} options={{ title: 'Área do Médico', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Chat', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ title: 'Notificações', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="ExercicioDescricaoScreen" component={ExercicioDescricaoScreen} options={{ title: 'Descrição do Exercício', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="ExercicioDescricaoScreen1" component={ExercicioDescricaoScreen1} options={{ title: 'Descrição do Exercício 1', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="ExercicioDescricaoScreen2" component={ExercicioDescricaoScreen2} options={{ title: 'Descrição do Exercício 2', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="ExercicioDescricaoScreen3" component={ExercicioDescricaoScreen3} options={{ title: 'Descrição do Exercício 3', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="ExercicioDescricaoScreen4" component={ExercicioDescricaoScreen4} options={{ title: 'Descrição do Exercício 4', headerStyle: { backgroundColor: '#0DB575' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
