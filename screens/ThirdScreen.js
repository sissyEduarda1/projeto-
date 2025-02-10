import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem na tela */}
      <Image
        source={require('../views/img/thirdScreenImage.png')} // Certifique-se do caminho correto
        style={styles.image}
      />

      {/* Título */}
      <Text style={styles.title}>LUKEMI'S</Text>

      {/* Botão de paciente */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PatientRegisterScreen')} // Direciona para a tela de registro do paciente
      >
        <Text style={styles.buttonText}>Começar como paciente</Text>
      </TouchableOpacity>

      {/* Botão de médico */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DoctorLoginScreen')} // Direciona para a tela de registro do Médico
      >
        <Text style={styles.buttonText}>Começar como médico</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300, // Largura da imagem
    height: 200, // Altura da imagem
    marginBottom: 120, // Espaçamento inferior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0DB575',
    padding: 20,
    borderRadius: 11,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ThirdScreen;
