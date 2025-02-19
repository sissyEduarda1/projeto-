import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const ExercicioDescricaoScreen1 = () => {
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
        source={require('../views/videos/Vexercicio2.mp4')}
        style={styles.video}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

      <Text style={styles.animationLabel}>Animação</Text>

      {/* Duração */}
      <View style={styles.durationContainer}>
        <Text style={styles.durationTitle}>REPETIÇÕES</Text>
        <Text style={styles.durationValue}>20</Text>
      </View>

      {/* Instruções */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>INSTRUÇÕES</Text>
        <Text style={styles.instructionsText}>
          Comece na posição de flexão. Em seguida, faça uma flexão e, ao subir, gire a parte superior do corpo e estenda seu braço direito para cima.

          Repita o exercício com o outro braço.
        </Text>
      </View>

      {/* Área de Foco */}
      <View style={styles.focusContainer}>
        <Text style={styles.focusTitle}>ÁREA DE FOCO</Text>
        <View style={styles.focusTags}>
          <Text style={styles.focusTag}>Braços</Text>
          <Text style={styles.focusTag}>Antebraços</Text>
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

export default ExercicioDescricaoScreen1;
