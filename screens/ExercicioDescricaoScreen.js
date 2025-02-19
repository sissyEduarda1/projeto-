import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



const ExercicioDescricaoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem de Animação */}
      <Image
        source={require('../views/img/Alongamento de biceps em pé para a esquerda.jpg')}
        style={styles.animationImage}
      />

      <Text style={styles.animationLabel}>Animação</Text>

      {/* Duração */}
      <View style={styles.durationContainer}>
        <Text style={styles.durationTitle}>DURAÇÃO</Text>
        <Text style={styles.durationValue}>00:30</Text>
      </View>

      {/* Instruções */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>INSTRUÇÕES</Text>
        <Text style={styles.instructionsText}>
          Fique de pé, com o braço esquerdo perto de uma parede. Estenda o braço e gire o tronco para o lado oposto até sentir o alongamento. Mantenha a posição por 30 segundos.
        </Text>
      </View>



      {/* Área de Foco */}
      <View style={styles.focusContainer}>
        <Text style={styles.focusTitle}>ÁREA DE FOCO</Text>
        <View style={styles.focusTags}>
          <Text style={styles.focusTag}>Braços</Text>
          <Text style={styles.focusTag}>Antebraços</Text>
        </View>
      </View>


     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  animationImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  animationLabel: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0DB575',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  durationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0DB575',
  },
  durationValue: {
    fontSize: 16,
    color: '#333',
  },
  instructionsContainer: {
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0DB575',
    marginBottom: 5,
  },
  instructionsText: {
    color: '#333',
    fontSize: 14,
  },
  focusContainer: {
    marginBottom: 20,
  },
  focusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0DB575',
    marginBottom: 5,
  },
  focusTags: {
    flexDirection: 'row',
    gap: 10,
  },
  focusTag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: '#333',
  },
  backButton: {
    backgroundColor: '#0DB575',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExercicioDescricaoScreen;


