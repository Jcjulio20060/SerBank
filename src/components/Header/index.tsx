import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../screens/home/style";

export default function Header() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Tem certeza de que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: async () => {
            try {
              // Remove o usuário logado do AsyncStorage
              await AsyncStorage.removeItem("@userLoggedIn");

              // Redireciona para a tela de login
              navigation.navigate("Login");
            } catch (error) {
              console.error("Erro ao fazer logout:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        <Text style={{ color: "#2D9CDB" }}>Ser</Text>
        <Text style={{ color: "#F2C94C" }}>Bank</Text>
      </Text>
      <View style={styles.headerIcons}>
        <FontAwesomeIcon icon={faBell} size={20} style={styles.icon} />
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
