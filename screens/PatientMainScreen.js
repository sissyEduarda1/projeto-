import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PatientMainScreen = () => {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../views/img/ft.png')} // Substitua pelo caminho da sua imagem
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greeting}>Oi, Bem-Vindo</Text>
            <Text style={styles.name}>Salomão</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              source={require('../views/img/icone_definições.png')} // Ícone de configurações
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../views/img/noti.png')} // Ícone de notificações
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Plano do dia */}
      <View style={styles.planSection}>
        <Text style={styles.planTitle}>Plano do dia</Text>
        <Text style={styles.planDate}>Terça, 21 Dez</Text>
        <Image
          source={require('../views/img/imagprincipal.jpg')} // Substitua pelo caminho da sua imagem
          style={styles.planImage}
        />
      </View>

      {/* Exercícios */}
      <View style={styles.exercisesSection}>
        <View style={styles.exercisesHeader}>
          <Text style={styles.sectionTitle}>Exercícios</Text>
          <Text style={styles.viewHistory}>Ver história</Text>
        </View>
        <View style={styles.iconsRow}>
          <TouchableOpacity style={styles.circle}>
            <Image
              source={require('../views/img/iconebina.png')} // Ícone de ciclismo
              style={styles.circleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image
              source={require('../views/img/iconeandando.png')} // Ícone de caminhada
              style={styles.circleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image
              source={require('../views/img/iconecorrendo.png')} // Ícone de corrida
              style={styles.circleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image
              source={require('../views/img/iconeresumo.png')} // Ícone de resumo
              style={styles.circleIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categorias */}
      <View style={styles.categorySection}>
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>Categoria</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CategoriesScreen')}>
            <Text>Ver Tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryGrid}>
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Categoria')} // Navegação para a tela "Categoria"
          >
            <Image
              source={require('../views/img/imagemfisio1.jpg')} // Substitua pelo caminho da sua imagem
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../views/img/imagfisio1.png')} // Substitua pelo caminho da sua imagem
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../views/img/imagemfisio2.jpg')} // Substitua pelo caminho da sua imagem
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../views/img/imagfisio2.png')} // Substitua pelo caminho da sua imagem
              style={styles.categoryImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra de Navegação */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../views/img/iconedecasa.png')} // Ícone de home
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../views/img/iconemensagens.png')} // Ícone de mensagens
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Mensagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../views/img/iconecalendario.png')} // Ícone de calendário
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Calendário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../views/img/iconepessoa.png')} // Ícone de perfil
            style={styles.navIcon}
          />
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  planSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    margin: 20,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0DB575',
  },
  planDate: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  planImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  exercisesSection: {
    padding: 20,
  },
  exercisesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewHistory: {
    fontSize: 14,
    color: '#0DB575',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  circleIcon: {
    width: 30,
    height: 30,
  },
  categorySection: {
    padding: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    fontSize: 14,
    color: '#0DB575',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryCard: {
    width: '48%',
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#0DB575',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  navLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

export default PatientMainScreen;

