import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  descriptionContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#7D7D7D",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 480,
    height: 390,
    resizeMode: "contain",
  },
});