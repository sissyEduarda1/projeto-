import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DoctorLoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Esferas no topo */}
      <View style={styles.topCircles}>
        <View style={styles.outerCircle} />
        <View style={styles.innerCircle} />
      </View>

      {/* Imagem */}
      <Image
        source={require('../views/img/1.png')} // Atualize o caminho para a sua imagem
        style={styles.image}
      />

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Digite o seu email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a sua palavra passe"
        secureTextEntry
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  topCircles: {
    position: 'absolute',
    top: -50,
    right: -50,
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(13, 181, 117, 0.2)',
    position: 'absolute',
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(13, 181, 117, 0.5)',
    position: 'absolute',
    top: 25,
    left: 25,
  },
  image: {
    width: 159,
    height: 200,
    marginTop: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#0DB575',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoctorLoginScreen;
