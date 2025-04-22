import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../users"; // Importa a lista de usuários

export default function SignupForm() {
  const navigation = useNavigation();

  // Estados para os campos do formulário
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  // Função de validação
  const handleSignup = async () => {
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
    if (!cpf.trim() || cpf.length !== 14) {
      Alert.alert("Erro", "Por favor, insira um CPF válido.");
      return;
    }
    if (!password.trim() || password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Cria o novo usuário
    const novoUsuario = {
      nome: name,
      sobrenome: "",
      cpf: cpf,
      dataNascimento: "",
      email: email,
      senha: password,
      transacoesRecentes: [],
    };

    // Adiciona o novo usuário ao AsyncStorage
    try {
      const usuariosExistentes = await AsyncStorage.getItem("@users");
      const usuariosAtualizados = usuariosExistentes
        ? JSON.parse(usuariosExistentes)
        : users;

      usuariosAtualizados.push(novoUsuario);

      await AsyncStorage.setItem("@users", JSON.stringify(usuariosAtualizados));

      Alert.alert("Sucesso", "Conta criada com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    }
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
      <TextInput
        placeholder="Nome Completo"
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
      <TextInput
        placeholder="Email"
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
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
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
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}