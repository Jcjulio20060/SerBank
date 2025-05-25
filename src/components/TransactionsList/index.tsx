import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../screens/home/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TransactionsList: React.FC = () => {
  const navigation = useNavigation<any>(); // Substitua 'any' pelo tipo correto, se disponível
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const usuarioLogado = await AsyncStorage.getItem("@userLoggedIn");
        if (usuarioLogado) {
          const usuario = JSON.parse(usuarioLogado);
          const ultimasTransacoes = usuario.transacoesRecentes.slice(-2);
          setRecentTransactions(ultimasTransacoes);
        }
      } catch (error) {
        console.error("Erro ao carregar as transações:", error);
      }
    };

    fetchTransactions();
  }, []);

  const renderTransaction = ({ item }: { item: any }) => (
    <View style={styles.transactionBox}>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.descricao}</Text>
        <Text
          style={[
            styles.transactionAmount,
            { color: item.valor < 0 ? "#E74C3C" : "#2ECC71" },
          ]}
        >
          {item.valor < 0 ? "-" : "+"}R$
          {Math.abs(item.valor).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Historico")} // Navega para a tela de histórico
        style={styles.transactionHeader}
      >
        <Text style={styles.sectionTitle}>Transações Recentes</Text>
        <FontAwesomeIcon icon={faArrowRight} size={16} />
      </TouchableOpacity>

      <FlatList
        data={recentTransactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTransaction}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma transação recente encontrada.</Text>
        }
      />
    </View>
  );
};

export default TransactionsList;