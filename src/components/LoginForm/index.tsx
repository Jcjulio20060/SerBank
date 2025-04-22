import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../screens/login/style";
import users from "../users"; // Importa a lista de usuários

export default function LoginForm() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [verSenha, setVerSenha] = useState(false);
  const [erro, setErro] = useState("");

  const navigation = useNavigation();

  const validarLogin = async () => {
    const cpfLimpo = cpf.replace(/\D/g, "");
    const usuarioEncontrado = users.find(
      (user) => user.cpf.replace(/\D/g, "") === cpfLimpo && user.senha === senha
    );

    if (usuarioEncontrado) {
      await AsyncStorage.setItem("@userLoggedIn", JSON.stringify(usuarioEncontrado));
      navigation.navigate("Home");
    } else {
      Alert.alert("Erro", "CPF ou senha incorretos.");
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#aaa"
          style={styles.inputIcon}
        />
        <TextInputMask
          type={"cpf"}
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#ADAEBC"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#aaa"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ADAEBC"
          secureTextEntry={!verSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setVerSenha(!verSenha)}>
          <Ionicons
            name={verSenha ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberContainer}>
        <TouchableOpacity>
          <Text style={styles.rememberText}>Esqueci a Senha</Text>
        </TouchableOpacity>
      </View>

      {erro !== "" && <Text style={{ color: "red", marginBottom: 10 }}>{erro}</Text>}

      <TouchableOpacity style={styles.button} onPress={validarLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </>
  );
}