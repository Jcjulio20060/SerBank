import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../../components/users"; // Importa a lista de usuários

const colors = {
  primary: "#1A535C",
  white: "#FFFFFF",
  text: "#333333",
  accent: "#FFE66D",
  success: "#10B981",
};

export default function Comprovante({ route, navigation }) {
  const { nome, chave, valor, tipo } = route.params; // Recebe o tipo de operação

  useEffect(() => {
    const updateBalances = async () => {
      try {
        // Recupera o usuário logado
        const userData = await AsyncStorage.getItem("@userLoggedIn");
        if (userData) {
          const loggedUser = JSON.parse(userData);

          // Busca o usuário logado na lista de usuários
          const user = users.find((u) => u.cpf === loggedUser.cpf);
          if (user) {
            if (tipo === "adicionar") {
              // Adiciona o valor ao saldo do usuário logado
              user.saldo += valor;
            } else {
              // Remove o valor do saldo do usuário logado
              user.saldo -= valor;
            }
          }

          Alert.alert("Sucesso", "Operação realizada com sucesso!");
        } else {
          Alert.alert("Erro", "Usuário logado não encontrado.");
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível atualizar os saldos.");
      }
    };

    updateBalances();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprovante de Transferência</Text>
      <View style={styles.card}>
        <Text style={styles.info}>
          <Text style={styles.label}>Nome: </Text>
          {nome}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Chave Pix: </Text>
          {chave}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Valor: </Text>
          <Text style={styles.value}>
            R$ {valor.toFixed(2).replace(".", ",")}
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar à Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: colors.accent,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color: colors.primary,
  },
  value: {
    fontWeight: "bold",
    color: colors.success,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
