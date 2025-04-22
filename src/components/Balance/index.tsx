import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../screens/home/style";

export default function Balance() {
  const navigation = useNavigation<any>(); // Replace 'any' with your navigation type if available
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const calcularSaldo = async () => {
      try {
        // Recupera o usuário logado do AsyncStorage
        const usuarioLogado = await AsyncStorage.getItem("@userLoggedIn");
        if (usuarioLogado) {
          const usuario = JSON.parse(usuarioLogado);

          // Calcula o saldo somando as transações recentes
          const saldoCalculado = usuario.transacoesRecentes.reduce(
            (total: number, transacao: { valor: number }) => total + transacao.valor,
            0
          );

          setSaldo(saldoCalculado);
        }
      } catch (error) {
        console.error("Erro ao calcular o saldo:", error);
      }
    };

    calcularSaldo();
  }, []);

  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceHeader}>
        <Text style={styles.balanceTitle}>Saldo Disponível</Text>
        <FontAwesomeIcon icon={faEyeSlash} size={20} style={styles.icon} />
      </View>
      <Text style={styles.balanceValue}>
        {`R$${saldo.toFixed(2).replace(".", ",")}`}
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
