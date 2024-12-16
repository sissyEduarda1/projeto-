import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../views/img/undraw_doctors_hwty (2) 1.png')} style={styles.image} />
      <Text style={styles.title}>Tudo que precisas, sem sair de casa</Text>
      <Text style={styles.subtitle}>
        Tenha contacto com o seu fisioterapeuta sem sair de casa, faça os seus exercícios com vídeos explicativos e muito mais.
      </Text>
      <Button
        title="Próxima"
        onPress={() => navigation.navigate('Third')}  // Navega para a terceira tela
        color="#28a745"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
});
