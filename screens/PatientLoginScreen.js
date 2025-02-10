import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PatientLoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navegar para a tela principal do paciente
    navigation.navigate('PatientMainScreen');
  };

  return (
    <View style={styles.container}>
      {/* Esferas decorativas no topo */}
      <View style={styles.topCircles}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>

      {/* Imagem no topo */}
      <Image 
        source={require('../views/img/login.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />

      {/* Retângulo contendo o formulário */}
      <View style={styles.formContainer}>
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

        {/* Esqueceu a senha */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a palavra passe?</Text>
        </TouchableOpacity>

        {/* Botão de login */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Link para registro */}
        <TouchableOpacity onPress={() => navigation.navigate('PatientRegisterScreen')}>
          <Text style={styles.registerText}>
            Ainda não possui uma conta? <Text style={styles.registerLink}>Registrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCircles: {
    position: 'absolute',
    top: -80, // Posiciona as esferas no topo
    right: -50,
  },
  outerCircle: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(0, 191, 143, 0.2)', // Esfera externa transparente
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 191, 143, 0.8)', // Esfera interna mais opaca
    borderRadius: 50,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  formContainer: {
    width: '88%',
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Sombra para Android
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  forgotPasswordText: {
    color: '#0DB575',
    fontSize: 14,
    textAlign: 'right',
    width: '100%',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#0DB575',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  registerLink: {
    color: '#0DB575',
    fontWeight: 'bold',
  },
});

export default PatientLoginScreen;
