import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const icons = {
  bina: require('../views/img/iconebina.png'),
  andando: require('../views/img/iconeandando.png'),
  correndo: require('../views/img/iconecorrendo.png'),
  resumo: require('../views/img/iconeresumo.png'),
  casa: require('../views/img/iconedecasa.png'),
  mensagens: require('../views/img/iconemensagens.png'),
  calendario: require('../views/img/iconecalendario.png'),
  pessoa: require('../views/img/iconepessoa.png'),
};

const images = {
  fisio1: require('../views/img/imagemfisio1.jpg'),
  fisio1Alt: require('../views/img/imagfisio1.png'),
  fisio2: require('../views/img/imagemfisio2.jpg'),
  fisio2Alt: require('../views/img/imagfisio2.png'),
};

const PatientMainScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../views/img/ft.png')} style={styles.profileImage} />
          <View>
            <Text style={styles.greeting}>Oi, Bem-Vindo</Text>
            <Text style={styles.name}>Salomão</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require('../views/img/icone_definições.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
            <Image source={require('../views/img/noti.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Plano do dia */}
      <View style={styles.planSection}>
        <Text style={styles.planTitle}>Plano do dia</Text> 
        <Text style={styles.planDate}>Terça, 21 Dez</Text>
        <Image source={require('../views/img/imagprincipal.jpg')} style={styles.planImage} />
      </View>

      {/* Exercícios */}
      <View style={styles.exercisesSection}>
        <View style={styles.exercisesHeader}>
          <Text style={styles.sectionTitle}>Exercícios</Text>
          <Text style={styles.viewHistory}>Ver história</Text>
        </View>
        <View style={styles.iconsRow}>
          {Object.keys(icons).slice(0, 4).map((key, index) => (
            <TouchableOpacity key={index} style={styles.circle}>
              <Image source={icons[key]} style={styles.circleIcon} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Categorias */}
      <View style={styles.categorySection}>
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>Categoria</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CategoriesScreen')}>
            <Text style={styles.viewAll}>Ver Tudo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryGrid}>
          {Object.keys(images).map((key, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image source={images[key]} style={styles.categoryImage} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Barra de Navegação */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'casa', label: 'Início' },
          { icon: 'mensagens', label: 'Mensagens', screen: 'DoctorScreen' },
          { icon: 'calendario', label: 'Calendário' },
          { icon: 'pessoa', label: 'Perfil' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navButton}
            onPress={() => item.screen && navigation.navigate(item.screen)}
          >
            <Image source={icons[item.icon]} style={styles.navIcon} />
            <Text style={styles.navLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
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
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  planDate: {
    fontSize: 14,
    color: '#666',
  },
  planImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    resizeMode: 'cover',
    marginTop: 10,
  },
  exercisesSection: {
    padding: 20,
  },
  exercisesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginTop: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0f7ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categorySection: {
    padding: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAll: {
    fontSize: 14,
    color: '#0DB575',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryCard: {
    width: '48%',
    marginBottom: 10,
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
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
    resizeMode: 'contain',
  },
  navLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

export default PatientMainScreen;
