import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const ExercicioDescricaoScreen2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* Vídeo em loop infinito */}
      <Video
        ref={videoRef}
        source={require('../views/videos/Vexercicio1.mp4')}
        style={styles.video}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

      <Text style={styles.animationLabel}>Animação</Text>

      {/* Duração */}
      <View style={styles.durationContainer}>
        <Text style={styles.durationTitle}>DURAÇÃO</Text>
        <Text style={styles.durationValue}>30s</Text>
      </View>

      {/* Instruções */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>INSTRUÇÕES</Text>
        <Text style={styles.instructionsText}>
        Sente-se na cadeira com a coluna reta e com os pés totalmente apoiados no chão

Em seguida, levante os braços acima da cabeça e mova o peito para frente. Ao expirar, baixe os braços  até ficarem paralelos ao chão

Repetir 3 vezes



 
        </Text>
      </View>

      {/* Área de Foco */}
      <View style={styles.focusContainer}>
        <Text style={styles.focusTitle}>ÁREA DE FOCO</Text>
        <View style={styles.focusTags}>
          <Text style={styles.focusTag}>Costas</Text>
          <Text style={styles.focusTag}>Ombros</Text>
         
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
  video: {
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
});

export default ExercicioDescricaoScreen2;
