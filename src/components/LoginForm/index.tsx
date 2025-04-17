import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEye } from '@fortawesome/free-regular-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../screens/login/style';

export default function LoginForm() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!cpf || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (cpf === '12345678900' && password === 'senha123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'CPF ou senha inválidos.');
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="CPF"
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <FontAwesomeIcon icon={faUser} style={styles.inputIcon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <FontAwesomeIcon icon={faEye} style={styles.inputIcon} />
      </View>
      <Text style={styles.link}>Esqueci a Senha</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
