import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colors = {
  primary: "#1A535C",
  accent: "#FFE66D",
  white: "#FFFFFF",
  gray: "#EDEDED",
  text: "#333333",
};

export default function ValorPix({ navigation }) {
  const [amount, setAmount] = useState("");
  const MAX_BALANCE = 300;

  const handleContinue = () => {
    // Remove pontos e substitui vírgula por ponto para converter para número
    const numericValue = parseFloat(amount.replace(/\./g, "").replace(",", "."));
    
    if (isNaN(numericValue) || numericValue <= 0) {
      Alert.alert("Valor inválido", "Por favor, insira um valor maior que zero.");
      return;
    }
    
    if (numericValue > MAX_BALANCE) {
      Alert.alert("Saldo insuficiente", `Seu saldo disponível é de R$ ${MAX_BALANCE.toFixed(2).replace(".", ",")}.`);
      return;
    }
    
    // Navega para a tela ListaPix passando o valor como parâmetro
    navigation.navigate("ListaPix", { valorTransferencia: numericValue });
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Transferência</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.question}>Qual é o valor da transferência?</Text>
        
        <Text style={styles.balance}>
          Saldo disponível: <Text style={styles.balanceValue}>R$ {MAX_BALANCE.toFixed(2).replace(".", ",")}</Text>
        </Text>

        {/* Valores rápidos em amarelo */}
        <View style={styles.quickValues}>
          {["10,00", "50,00", "100,00"].map((value) => (
            <TouchableOpacity 
              key={value}
              style={styles.quickButton}
              onPress={() => setAmount(value)}
            >
              <Text style={styles.quickText}>R$ {value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Campo de valor */}
        <View style={styles.amountContainer}>
          <Text style={styles.currency}>R$</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0,00"
            placeholderTextColor={colors.primary}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            autoFocus
          />
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          {/* Botão Continuar em amarelo */}
          <TouchableOpacity 
            style={[styles.confirmButton, !amount && { opacity: 0.5 }]}
            disabled={!amount}
            onPress={handleContinue}
          >
            <Text style={styles.confirmText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ... (mantenha os estilos exatamente como estão)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  question: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balance: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 24,
  },
  balanceValue: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  quickValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickButton: {
    backgroundColor: colors.accent, // Amarelo
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    minWidth: 100,
    alignItems: 'center',
  },
  quickText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    paddingBottom: 8,
    marginBottom: 32,
  },
  currency: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    color: colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
  },
  limitsButton: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  limitsText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  confirmButton: {
    backgroundColor: colors.accent, // Amarelo
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});