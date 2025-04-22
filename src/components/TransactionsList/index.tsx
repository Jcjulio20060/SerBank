import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../screens/home/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TransactionsList: React.FC = () => {
  const navigation = useNavigation<any>(); // Replace 'any' with your navigation type if available
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Recupera o usuário logado do AsyncStorage
        const usuarioLogado = await AsyncStorage.getItem("@userLoggedIn");
        if (usuarioLogado) {
          const usuario = JSON.parse(usuarioLogado);

          // Obtém as duas últimas transações
          const ultimasTransacoes = usuario.transacoesRecentes.slice(-2);
          setRecentTransactions(ultimasTransacoes);
        }
      } catch (error) {
        console.error("Erro ao carregar as transações:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <View style={styles.section}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Historico")}
        style={styles.transactionHeader}
      >
        <Text style={styles.sectionTitle}>Transações Recentes</Text>
        <FontAwesomeIcon icon={faArrowRight} size={16} />
      </TouchableOpacity>

      {recentTransactions.map((transaction, index) => (
        <View key={index} style={styles.transactionBox}>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>{transaction.descricao}</Text>
            <Text
              style={[
                styles.transactionAmount,
                { color: transaction.valor < 0 ? "#E74C3C" : "#2ECC71" },
              ]}
            >
              {transaction.valor < 0 ? "-" : "+"}R$
              {Math.abs(transaction.valor).toFixed(2)}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TransactionsList;