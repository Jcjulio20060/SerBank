import { StyleSheet } from "react-native";

const colors = {
  primary: "#1A535C",
  accent: "#FFE66D",
  white: "#FFFFFF",
  text: "#333333",
  gray: "#F5F5F5",
  lightGray: "#E0E0E0",
  success: "#10B981",
  danger: "#EF4444",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: colors.gray,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  stockName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 5,
  },
  stockSymbol: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  stockPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.success,
    marginBottom: 5,
  },
  stockChange: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 5,
  },
  positiveChange: {
    color: colors.success,
  },
  negativeChange: {
    color: colors.danger,
  },
  errorText: {
    fontSize: 16,
    color: colors.danger,
    textAlign: "center",
    marginTop: 20,
  },
});