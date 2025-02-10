import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Ícones de três barras
import { useNavigation } from '@react-navigation/native';

const FisioterapiaEsportivaScreen = () => {
  const exercises = [
    {
      title: 'Agachamento',
      image: require('../views/img/Agachamento.jpg'),
    },
    {
      title: 'Joelho ao peito esticar para a direita',
      image: require('../views/img/Joelhopeito.jpg'),
    },
    {
      title: 'Avanço',
      image: require('../views/img/Avanço.jpg'),
    },
    {
      title: 'Alongamento da Lombar',
      image: require('../views/img/Lombar.jpg'),
    },
    {
      title: 'Polichinelo',
      image: require('../views/img/Polichinelo.jpg'),
    },
  ];

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../views/img/fisio_esportiva.jpg')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Fisioterapia esportiva</Text>
        <Text style={styles.headerDescription}>30 MIN - 10 Exercícios</Text>
      </View>

      {/* Título da seção */}
      <Text style={styles.sectionTitle}>Exercícios</Text>

      {/* Lista de exercícios */}
      {exercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseCard}>
          {/* Ícone de três barras */}
          <Feather name="menu" size={24} color="#333" style={styles.icon} />
          {/* Imagem do exercício */}
          <Image source={exercise.image} style={styles.exerciseImage} />
          {/* Nome do exercício */}
          <Text style={styles.exerciseTitle}>{exercise.title}</Text>
        </View>
      ))}

      {/* Botão "Começar" */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Começar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0DB575',
    textAlign: 'center',
  },
  headerDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0DB575',
    marginBottom: 10,
  },
  exerciseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Espaço entre os cartões
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    marginRight: 15, // Espaço entre a imagem e o texto
    borderRadius: 5,
  },
  exerciseTitle: {
    fontSize: 16,
    color: '#333',
    flex: 1, // O texto ocupa o espaço restante
  },
  startButton: {
    backgroundColor: '#0DB575',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FisioterapiaEsportivaScreen;
