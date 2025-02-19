import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

const doctors = [
  { id: '1', name: 'Dr. Olivia Turner' },
  { id: '2', name: 'Drª Filomena Silveira' },
  { id: '3', name: 'Dr. Vanilson Pinheiro' }
];

const DoctorsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#0B8043" />
        </TouchableOpacity>
        <Text style={styles.title}>Médicos</Text>
        <View style={styles.icons}>
          <Ionicons name="search" size={24} color="#0B8043" style={styles.icon} />
          <Ionicons name="settings" size={24} color="#0B8043" />
        </View>
      </View>

      {/* Filtro */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Pesquisar Por</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>A - Z</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Médicos */}
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              if (item.name === 'Dr. Olivia Turner') {
                navigation.navigate('ChatScreen'); // Navega para a tela de chat
              }
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Barra de Navegação */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="#" />
        <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
        <Ionicons name="person-outline" size={24} color="#fff" />
        <Ionicons name="calendar-outline" size={24} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0B8043' },
  icons: { flexDirection: 'row' },
  icon: { marginRight: 10 },
  filterContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 10 },
  filterText: { fontSize: 16, marginRight: 10 },
  filterButton: { backgroundColor: '#0B8043', padding: 5, borderRadius: 10 },
  filterButtonText: { color: '#fff', fontWeight: 'bold' },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E0F2F1', margin: 10, borderRadius: 12, padding: 10 },
  image: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 18, color: '#0B8043' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#0B8043', padding: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20 }
});

export default DoctorsScreen;

