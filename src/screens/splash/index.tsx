import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Splash">;
};

export default function SplashScreen({ navigation }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 1) {
          clearInterval(interval);
          navigation.replace("Login"); // Redireciona quando chega em 100%
          return 1;
        }
        return oldProgress + 0.1; // Aumenta a barra progressivamente
      });
    }, 300); // Atualiza a cada 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Progress.Bar progress={progress} width={200} color="#007bff" />
      <Text style={styles.text}>Carregando...</Text>
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
