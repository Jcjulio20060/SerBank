import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash, faEye, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../users"; // Importa a lista de usuários
import { styles } from "../../screens/home/style";

export default function Balance() {
  const navigation = useNavigation<any>(); // Substitua 'any' pelo tipo correto, se disponível
  const [saldo, setSaldo] = useState<number | null>(null);
  const [showSaldo, setShowSaldo] = useState<boolean>(true); // Estado para controlar a visibilidade do saldo

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        // Recupera o usuário logado do AsyncStorage
        const usuarioLogado = await AsyncStorage.getItem("@userLoggedIn");
        if (usuarioLogado) {
          const loggedUser = JSON.parse(usuarioLogado);

          // Busca o saldo do usuário na lista de usuários
          const user = users.find((u) => u.email === loggedUser.email);
          if (user) {
            setSaldo(user.saldo || 0); // Define o saldo do usuário encontrado
          } else {
            console.error("Usuário não encontrado na lista.");
          }
        } else {
          console.error("Nenhum usuário logado encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar o saldo:", error);
      }
    };

    fetchSaldo();
  }, []);

  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceHeader}>
        <Text style={styles.balanceTitle}>Saldo Disponível</Text>
        <TouchableOpacity onPress={() => setShowSaldo(!showSaldo)}>
          <FontAwesomeIcon
            icon={showSaldo ? faEyeSlash : faEye} // Alterna entre os ícones
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.balanceValue}>
        {showSaldo && saldo !== null ? `R$ ${saldo.toFixed(2).replace(".", ",")}` : "••••••••"}
      </Text>
      <View style={styles.balanceActions}>
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={() => navigation.navigate("Transition")}
        >
          <FontAwesomeIcon icon={faArrowUp} size={15} style={styles.icon} />
          <Text style={styles.actionText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Transition")}
        >
          <FontAwesomeIcon icon={faArrowDown} size={15} style={styles.icon} />
          <Text style={styles.actionText}>Receber</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
