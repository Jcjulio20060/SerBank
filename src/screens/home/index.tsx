import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/navbar'; // Ajuste o caminho conforme necessário

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Tela Principal</Text>
        {/* Outros componentes e conteúdo da sua tela inicial */}
      </View>
      <NavBar /> {/* O componente NavBar está fora do container de conteúdo */}
    </View>
  );
}
        


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
