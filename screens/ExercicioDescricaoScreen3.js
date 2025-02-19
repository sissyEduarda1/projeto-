import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



const ExercicioDescricaoScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem de Animação */}
      <Image
        source={require('../views/img/Alongamento de triceps para esquerda.jpg')}
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
        Coloque sua mão esquerda nas costas , utilize sua mão direta para pegar seu cotovelo esquerdo e puxá-lo suavemente.Fique nessa posição por alguns minutos 
        </Text>
      </View>



      {/* Área de Foco */}
      <View style={styles.focusContainer}>
        <Text style={styles.focusTitle}>ÁREA DE FOCO</Text>
        <View style={styles.focusTags}>
          <Text style={styles.focusTag}>Braços</Text>
        
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

export default ExercicioDescricaoScreen3;


