// PatientProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PatientProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      <Image source={require('../views/img/ft.png')} style={styles.profileImage} />
      <Text style={styles.profileName}>Salomão Delgado</Text>

      {['Perfil', 'Definições', 'Ajuda', 'Política De Privacidade', 'Sair'].map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Text style={styles.menuText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: '#0DB575',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 60,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PatientProfileScreen;
