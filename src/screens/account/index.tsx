import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Importar navegação
import { styles } from "./style";

export default function AccountScreen() {
  const [user, setUser] = useState<any>(null);
  const navigation = useNavigation(); // Inicializar navegação

  // Função para buscar o usuário logado do AsyncStorage
  const fetchLoggedUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("@userLoggedIn");
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        Alert.alert("Erro", "Nenhum usuário logado encontrado.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
    }
  };

  // Buscar os dados do usuário ao carregar a tela
  useEffect(() => {
    fetchLoggedUser();
  }, []);

  // Função para realizar logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@userLoggedIn"); // Remove os dados do AsyncStorage
      Alert.alert("Logout", "Você saiu da sua conta.");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }], // Redireciona para a tela de login
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível realizar o logout.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com avatar e informações do usuário */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user ? user.nome.charAt(0) : "?"}
          </Text>
        </View>
        <Text style={styles.name}>
          {user ? `${user.nome} ${user.sobrenome}` : "Carregando..."}
        </Text>
        <Text style={styles.email}>{user ? user.email : ""}</Text>
      </View>

      {/* Seção de ações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Configurações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="lock-closed-outline" size={20} color="#777" />
          <Text style={styles.settingsText}>Alterar Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="notifications-outline" size={20} color="#777" />
          <Text style={styles.settingsText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="help-circle-outline" size={20} color="#777" />
          <Text style={styles.settingsText}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}