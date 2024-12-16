import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Adicione a imagem */}
      <Image
        source={require('../views/img/thirdScreenImage.png')} // Caminho correto
        style={styles.image}
      />

      {/* Texto principal */}
      <Text style={styles.title}>LUKEMI'S</Text>

      {/* Botão de paciente */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PatientScreen')}>
        <Text style={styles.buttonText}>Começar como paciente</Text>
      </TouchableOpacity>
 {/* Botão de medico */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorScreen')}>
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
    width: 300, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    marginBottom: 120,
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
