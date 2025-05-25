import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";

interface Transacao {
  descricao: string;
  valor: number;
  data: string;
}

const HistoricoScreen: React.FC = () => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [filtroAtivo, setFiltroAtivo] = useState<string | null>(null);
  const navigation = useNavigation();

  // Função para buscar as transações do usuário logado
  const fetchTransacoes = async () => {
    try {
      const usuarioLogado = await AsyncStorage.getItem("@userLoggedIn");
      if (usuarioLogado) {
        const usuario = JSON.parse(usuarioLogado);
        setTransacoes(usuario.transacoesRecentes);
      } else {
        Alert.alert("Erro", "Nenhum usuário logado encontrado.");
      }
    } catch (error) {
      console.error("Erro ao carregar as transações:", error);
    }
  };

  useEffect(() => {
    fetchTransacoes();
  }, []);

  // Função para filtrar as transações
  const filtrarTransacoes = () => {
    if (!filtroAtivo) return transacoes;

    const hoje = new Date();
    if (filtroAtivo === "semana") {
      const seteDiasAtras = new Date();
      seteDiasAtras.setDate(hoje.getDate() - 7);
      return transacoes.filter(
        (t) => new Date(t.data) >= seteDiasAtras && new Date(t.data) <= hoje
      );
    } else if (filtroAtivo === "mês") {
      const mesAtual = hoje.getMonth();
      return transacoes.filter(
        (t) => new Date(t.data).getMonth() === mesAtual
      );
    } else if (filtroAtivo === "ano") {
      const anoAtual = hoje.getFullYear();
      return transacoes.filter(
        (t) => new Date(t.data).getFullYear() === anoAtual
      );
    }

    return transacoes;
  };

  const handleFiltrar = (filtro: string | null) => {
    setFiltroAtivo(filtro);
  };

  const renderItem = ({ item }: { item: Transacao }) => (
    <View style={styles.listItem}>
      <View style={styles.listItemLeft}>
        <Ionicons
          name={item.valor < 0 ? "arrow-down-outline" : "arrow-up-outline"}
          size={24}
          color={item.valor < 0 ? "#E74C3C" : "#2ECC71"}
        />
        <View>
          <Text style={styles.listItemDescription}>{item.descricao}</Text>
          <Text style={styles.listItemCategory}>{item.data}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.listItemValue,
          item.valor < 0 ? styles.valueNegative : styles.valuePositive,
        ]}
      >
        {item.valor < 0 ? "-" : "+"}R$ {Math.abs(item.valor).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#424242" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Histórico</Text>
      </View>

      <View style={styles.filterBar}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtroAtivo === null && styles.filterButtonActive,
          ]}
          onPress={() => handleFiltrar(null)}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtroAtivo === null && styles.filterButtonTextActive,
            ]}
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtroAtivo === "semana" && styles.filterButtonActive,
          ]}
          onPress={() => handleFiltrar("semana")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtroAtivo === "semana" && styles.filterButtonTextActive,
            ]}
          >
            Semana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtroAtivo === "mês" && styles.filterButtonActive,
          ]}
          onPress={() => handleFiltrar("mês")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtroAtivo === "mês" && styles.filterButtonTextActive,
            ]}
          >
            Mês
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtroAtivo === "ano" && styles.filterButtonActive,
          ]}
          onPress={() => handleFiltrar("ano")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtroAtivo === "ano" && styles.filterButtonTextActive,
            ]}
          >
            Ano
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtrarTransacoes()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhuma transação encontrada.
          </Text>
        }
      />
    </View>
  );
};

export default HistoricoScreen;