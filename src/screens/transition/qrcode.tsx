import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colors = {
  primary: "#1A535C",
  white: "#FFFFFF",
  text: "#333333",
};

export default function QRCodeScreen({ navigation }) {
  const fakeTransferData = {
    nome: "Fulano da Silva",
    chave: "fulano@gmail.com",
    valor: 250.75,
    bancoOrigem: "Banco Exemplo S.A.",
    bancoDestino: "Banco Digital Fake",
    comprovanteId: "1234567890",
    data: "22/04/2025",
    hora: "14:35",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escaneie o QR Code</Text>
      <Image
  source={require("../../../assets/qrcode.png")}
  style={styles.qrImage}
/>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Comprovante", fakeTransferData)}
      >
        <Icon name="check-circle" size={24} color={colors.white} />
        <Text style={styles.buttonText}>Comprovante de Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrImage: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 8,
  },
});
