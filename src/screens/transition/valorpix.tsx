import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../../components/users"; // Importa a lista de usuários

const colors = {
  primary: "#1A535C",
  accent: "#FFE66D",
  white: "#FFFFFF",
  text: "#333333",
};

export default function ValorPix({ navigation }) {
  const [amount, setAmount] = useState(""); // Valor inserido pelo usuário
  const [saldo, setSaldo] = useState(0); // Saldo do usuário logado

  // Função para buscar o saldo do usuário logado
  const fetchSaldo = async () => {
    try {
      const userData = await AsyncStorage.getItem("@userLoggedIn");
      if (userData) {
        const loggedUser = JSON.parse(userData);

        // Busca o usuário na lista de usuários
        const user = users.find((u) => u.cpf === loggedUser.cpf);
        if (user) {
          setSaldo(user.saldo || 0); // Assume que o saldo está armazenado no objeto do usuário
        } else {
          Alert.alert("Erro", "Usuário não encontrado.");
        }
      } else {
        Alert.alert("Erro", "Nenhum usuário logado encontrado.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar o saldo.");
    }
  };

  useEffect(() => {
    fetchSaldo();
  }, []);

  // Função para limpar caracteres não numéricos e retornar um número
  const parseCurrency = (value: string) => {
    const numericValue = parseFloat(value.replace(/[^0-9,.-]/g, "").replace(",", "."));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const handleContinue = () => {
    const numericValue = parseCurrency(amount); // Converte o valor para número
    if (numericValue <= 0) {
      Alert.alert("Valor inválido", "Por favor, insira um valor maior que zero.");
      return;
    }
    if (numericValue > saldo) {
      Alert.alert(
        "Saldo insuficiente",
        `Você não tem saldo suficiente para esta transferência. Seu saldo disponível é de R$ ${saldo.toFixed(2).replace(".", ",")}.`
      );
      return;
    }
    // Adiciona o tipo "retirar" ao navegar para ListaPix
    navigation.navigate("ListaPix", { valorTransferencia: numericValue, tipo: "retirar" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Transferência</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.saldo}>
          Saldo disponível: {saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </Text>
        <Text style={styles.question}>Qual é o valor da transferência?</Text>
        <TextInput
          style={styles.input}
          placeholder="R$ 0,00"
          keyboardType="numeric"
          value={amount}
          onChangeText={(value) => setAmount(value)} // Não formata o valor aqui
        />
        <TouchableOpacity
          style={[styles.button, !amount && { opacity: 0.5 }]}
          disabled={!amount}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 16,
    marginTop: 50,
  },
  headerTitle: { color: colors.white, fontSize: 18, fontWeight: "bold", marginLeft: 16 },
  content: { flex: 1, padding: 20 },
  saldo: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
    fontWeight: "bold",
  },
  question: { fontSize: 18, color: colors.primary, marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    fontSize: 24,
    marginBottom: 20,
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: colors.primary, fontWeight: "bold" },
});