import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const NotificationScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Cabeçalho */}
        <View className="flex-row justify-between items-center px-4">
          <Text className="text-xl font-bold text-green-600">Notificações</Text>
          <TouchableOpacity>
            <Text className="text-green-600 font-semibold">Marcar tudo</Text>
          </TouchableOpacity>
        </View>

        {/* Seção Hoje */}
        <SectionHeader title="Hoje" />
        <NotificationItem title="Agendar Consulta" time="2 M" icon={require("../views/img/calander.png")} />
        <NotificationItem title="Mudar Horário" time="2 H" icon={require("../views/img/calander.png")} />
        <NotificationItem title="Notas Médicas" time="3 H" icon={require("../views/img/nota.png")} />

        {/* Seção Ontem */}
        <SectionHeader title="Ontem" />
        <NotificationItem title="Agendar Consulta" time="2 D" icon={require("../views/img/calander.png")} />

        {/* Seção Data Específica */}
        <SectionHeader title="14 de Maio" />
        <NotificationItem title="Atualizar Consulta" time="5 M" icon={require("../views/img/messag.png")} />
      </ScrollView>

      {/* Barra de Navegação */}
      <View className="absolute bottom-0 left-0 right-0 bg-green-500 p-4 rounded-t-2xl flex-row justify-between items-center">
        <NavItem icon={require("../views/img/iconedecasa.png")} label="Home" />
        <NavItem icon={require("../views/img/iconemensagens.png")} label="Mensagens" />
        <NavItem icon={require("../views/img/iconecalendario.png")} label="Agenda" />
        <NavItem icon={require("../views/img/iconepessoa.png")} label="Perfil" />
      </View>
    </View>
  );
};

const NotificationItem = ({ title, time, icon }) => {
  return (
    <View className="flex-row items-center bg-gray-100 p-3 rounded-lg my-2">
      <Image source={icon} className="w-10 h-10" />
      <View className="ml-4 flex-1">
        <Text className="font-semibold text-black">{title}</Text>
        <Text className="text-gray-500 text-xs">Lorem ipsum dolor sit amet...</Text>
      </View>
      <Text className="text-gray-400 text-xs">{time}</Text>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View className="bg-blue-200 px-3 py-1 rounded-full w-fit my-2 self-start">
      <Text className="text-blue-600 font-semibold">{title}</Text>
    </View>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <TouchableOpacity className="flex-1 items-center">
      <Image source={icon} className="w-7 h-7 mb-1" />
      <Text className="text-white text-xs">{label}</Text>
    </TouchableOpacity>
  );
};

export default NotificationScreen;

