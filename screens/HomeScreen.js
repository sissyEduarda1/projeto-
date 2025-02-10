import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../views/img/logo.png')} style={styles.logo} />
      <Button
        title="Iniciar"
        onPress={() => navigation.navigate('SecondScreen')}

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
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 140,
  },
});
