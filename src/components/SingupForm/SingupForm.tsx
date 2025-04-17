import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignupForm() {
  const navigation = useNavigation();

  // Estados para os campos do formulário
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // Função de validação
  const handleSignup = () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Por favor, insira seu nome completo.");
      return;
    }
    if (!age.trim() || isNaN(Number(age)) || Number(age) <= 0) {
      Alert.alert("Erro", "Por favor, insira uma idade válida.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

    // Redireciona para a tela Home após validação bem-sucedida
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 16,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Crie sua Conta
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}>
        Nome Completo
      </Text>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        style={{
          width: "100%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}>
        Sua idade
      </Text>
      <TextInput
        placeholder="Idade"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{
          width: "100%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}>
        Email do Responsável
      </Text>
      <TextInput
        placeholder="parent@example.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{
          width: "100%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <TouchableOpacity
        onPress={handleSignup}
        style={{
          backgroundColor: "#F2C94C",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}