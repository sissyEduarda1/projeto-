import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../views/img/voltar.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.doctorName}>Dr. Olivia Turner</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('../views/img/fone.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../views/img/video.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat messages */}
      <ScrollView style={styles.chatContainer}>
        <Text style={styles.messageReceived}>Lorem ipsum dolor sit amet...</Text>
        <Text style={styles.time}>09:00</Text>

        <Text style={styles.messageSent}>Lorem ipsum dolor sit amet...</Text>
        <Text style={styles.time}>09:30</Text>

        <Text style={styles.messageReceived}>Lorem ipsum dolor sit amet...</Text>
        <Text style={styles.time}>09:43</Text>

        {/* Audio message */}
        <View style={styles.audioMessage}>
          <Image source={require('../views/img/ft.png')} style={styles.profilePic} />
          <TouchableOpacity>
            <Image source={require('../views/img/play.png')} style={styles.playIcon} />
          </TouchableOpacity>
          <Text>02:50</Text>
        </View>
        <Text style={styles.time}>09:50</Text>

        <Text style={styles.messageSent}>Lorem ipsum dolor sit amet...</Text>
        <Text style={styles.time}>09:55</Text>
      </ScrollView>

      {/* Typing Indicator */}
      <Text style={styles.typingIndicator}>Dr. Olivia está escrevendo...</Text>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Image source={require('../views/img/anexo.png')} style={styles.icon} />
        </TouchableOpacity>
        <TextInput placeholder='Escreva aqui...' style={styles.input} />
        <TouchableOpacity>
          <Image source={require('../views/img/enviar.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[     { icon: 'casa', label: 'Início' },
          { icon: 'mensagens', label: 'Mensagens', screen: 'DoctorScreen' },
          { icon: 'calendario', label: 'Calendário' },
          { icon: 'pessoa', label: 'Perfil' },].map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(item.screen)}>
           <Image source={{ uri: item.icon }} style={{ width: 50, height: 50 }} />

          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#D7E3FC' },
  doctorName: { fontSize: 18, fontWeight: 'bold', color: '#2A69AC' },
  headerIcons: { flexDirection: 'row' },
  icon: { width: 24, height: 24, marginLeft: 10 },
  chatContainer: { flex: 1, padding: 15 },
  messageReceived: { backgroundColor: '#D7E3FC', padding: 10, borderRadius: 10, alignSelf: 'flex-start' },
  messageSent: { backgroundColor: '#EAEAEA', padding: 10, borderRadius: 10, alignSelf: 'flex-end' },
  time: { fontSize: 12, color: '#888', alignSelf: 'center', marginVertical: 5 },
  typingIndicator: { color: '#2A69AC', marginLeft: 15, marginBottom: 5 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#D7E3FC' },
  input: { flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 20 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#0DB575' },
  navIcon: { width: 25, height: 25 }
});

export default ChatScreen;
