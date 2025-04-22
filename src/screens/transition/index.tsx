import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colors = {
  primary: "#1A535C",
  yellow: "#FFE66D",
  white: "#FFFFFF",
  text: "#333333",
};

export default function PixScreen({ navigation }) {
  const buttons = [
    { label: "Transferir", icon: "send", action: () => navigation.navigate('ValorPix') },
    { label: "Ler QR code", icon: "qr-code-scanner", action: () => navigation.navigate('QRCodeScreen') },

   
  ];

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Área Pix</Text>
        <Text style={styles.subtitle}>
          Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.
        </Text>

        <View style={styles.grid}>
          {buttons.map((btn, index) => (
            <TouchableOpacity
              style={styles.button}
              key={index}
              onPress={btn.action}
            >
              <View style={styles.iconCircle}>
                <Icon name={btn.icon} size={28} color={colors.primary} />
              </View>
              <Text style={styles.buttonLabel}>{btn.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    alignItems: "center",
    marginBottom: 24,
  },
  iconCircle: {
    backgroundColor: colors.yellow,
    borderRadius: 50,
    padding: 16,
    marginBottom: 8,
  },
  buttonLabel: {
    color: colors.text,
    textAlign: "center",
    fontSize: 12,
  },
});