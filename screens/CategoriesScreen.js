import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoriesScreen = () => {
  const categories = [
    {
      title: 'Fisioterapia do braço',
      description: '20 MIN - 8 Exercícios',
      image: require('../views/img/fisio_braco.jpg'),
      screen: 'FisioterapiaBracoScreen',// Tela específica para esta categoria
    },
    {
      title: 'Fisioterapia da perna',
      description: '20 MIN - 6 Exercícios',
      image: require('../views/img/fisio_perna.jpg'),
      screen:  'FisioterapiaPernaScreen',// Tela específica para esta categoria
    },
    {
      title: 'Fisioterapia esportiva',
      description: '30 MIN - 10 Exercícios',
      image: require('../views/img/fisio_esportiva.jpg'),
      screen: 'FisioterapiaEsportivaScreen', // Tela específica para esta categoria
    },
    {
      title: 'Fisioterapia das costas',
      description: '25 MIN - 7 Exercícios',
      image: require('../views/img/fisio_decostas.jpg'),
      screen: 'FisioterapiaCostasScreen',// Tela específica para esta categoria
    },
  ];

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.cardsContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              if (category.screen) {
                navigation.navigate(category.screen);
              }
            }}
          >
            <Image source={category.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{category.title}</Text>
              <Text style={styles.cardDescription}>{category.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Barra de Navegação */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../views/img/iconedecasa.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../views/img/iconemensagens.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../views/img/iconecalendario.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../views/img/iconepessoa.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0DB575',
    textAlign: 'center',
  },
  cardsContainer: {
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 144,
    borderRadius: 30,
    marginBottom: 10,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#0DB575',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 20,
  },
  navIcon: {
    width: 25,
    height: 25,
  },
});

export default CategoriesScreen;
