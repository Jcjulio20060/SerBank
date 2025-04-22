import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colors = {
  primary: "#1A535C",
  accent: "#FFE66D",
  white: "#FFFFFF",
  gray: "#EDEDED",
  text: "#333333",
};

export default function Comprovante({ route, navigation }) {
  const { nome, chave, valor, bancoOrigem, bancoDestino, comprovanteId, data, hora } = route.params;

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="close" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comprovante</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Corpo */}
      <View style={styles.content}>
        <Text style={styles.amount}>R$ {valor.toFixed(2).replace(".", ",")}</Text>
        <Text style={styles.label}>Transferido com sucesso</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Nome</Text>
          <Text style={styles.infoValue}>{nome}</Text>

          <Text style={styles.infoTitle}>Chave Pix</Text>
          <Text style={styles.infoValue}>{chave}</Text>

          <Text style={styles.infoTitle}>Banco de origem</Text>
          <Text style={styles.infoValue}>{bancoOrigem}</Text>

          <Text style={styles.infoTitle}>Banco de destino</Text>
          <Text style={styles.infoValue}>{bancoDestino}</Text>

          <Text style={styles.infoTitle}>Data e hora</Text>
          <Text style={styles.infoValue}>{data} às {hora}</Text>

          <Text style={styles.infoTitle}>Comprovante nº</Text>
          <Text style={styles.infoValue}>{comprovanteId}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  amount: {
    fontSize: 32,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 24,
  },
  infoBox: {
    width: "100%",
    backgroundColor: colors.gray,
    borderRadius: 10,
    padding: 20,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.primary,
    marginTop: 12,
  },
  infoValue: {
    fontSize: 16,
    color: colors.text,
  },
});
