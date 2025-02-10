import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PatientRegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Esferas no topo */}
      <View style={styles.topCircles}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Regista-se conosco!</Text>

        <TextInput style={styles.input} placeholder="Digite o seu nome completo" />
        <TextInput style={styles.input} placeholder="Digite o seu email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Digite a sua palavra passe" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirme a sua palavra passe" secureTextEntry />

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>

        {/* Link para voltar ao login */}
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('PatientLoginScreen')}
        >
          <Text style={styles.loginLinkText}>
            Já possui uma conta? <Text style={styles.loginText}>ENTRAR</Text>
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
  },
  topCircles: {
    position: 'absolute',
    top: -100, // Posiciona as esferas no topo
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
  formContainer: {
    flex: 1,
    width: '90%',
    marginTop: 150, // Espaço para as esferas no topo
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Sombra para Android
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  registerButton: {
    backgroundColor: '#0DB575',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 10,
  },
  loginLinkText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  loginText: {
    color: '#0DB575',
    fontWeight: 'bold',
  },
});

export default PatientRegisterScreen;
