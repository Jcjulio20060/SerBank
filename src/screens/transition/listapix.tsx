import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colors = {
  primary: "#1A535C",
  white: "#FFFFFF",
  text: "#333333",
  accent: "#FFE66D",
  gray: "#E5E7EB",
};

export default function ListaPix({ route, navigation }) {
  const { valorTransferencia, tipo } = route.params; // Recebe o tipo da operação

  const contacts = [
    { name: "João Silva", key: "joao@email.com" },
    { name: "Maria Oliveira", key: "maria@email.com" },
    { name: "Carlos Santos", key: "carlos@email.com" },
    { name: "Ana Paula", key: "ana@email.com" },
    { name: "Roberto Lima", key: "roberto@email.com" },
    { name: "Fernanda Costa", key: "fernanda@email.com" },
    { name: "Lucas Almeida", key: "lucas@email.com" },
    { name: "Juliana Pereira", key: "juliana@email.com" },
  ];

  const renderContact = ({ item }) => (
    <TouchableOpacity
      style={styles.contact}
      onPress={() =>
        navigation.navigate("Comprovante", {
          nome: item.name,
          chave: item.key,
          valor: valorTransferencia,
          tipo: tipo, // Passa o tipo da operação para a tela Comprovante
        })
      }
    >
      <View style={styles.contactIcon}>
        <Icon name="person" size={24} color={colors.white} />
      </View>
      <View>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactKey}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um contato</Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.gray,
    borderRadius: 8,
  },
  contactIcon: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  contactKey: {
    fontSize: 14,
    color: colors.text,
  },
  separator: {
    height: 10,
  },
});