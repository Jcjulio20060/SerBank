import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons/faCircleQuestion';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import { styles } from './style';

export default function LoginScreen() {
    const [cpf, setCpf] = useState(''); // Estado para o CPF
    const [password, setPassword] = useState(''); // Estado para a senha
    const navigation = useNavigation(); // Hook para navegação

    const handleLogin = () => {
        // Validação simples
        if (cpf === '' || password === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de login bem-sucedido
        if (cpf === '12345678900' && password === 'senha123') {
            navigation.navigate('Home'); // Navega para a tela inicial
        } else {
            Alert.alert('Erro', 'CPF ou senha inválidos.');
        }
    };

    return (
        <View style={styles.mainContainer}>
            {/* Sessão da Logo */}
            <View style={{ gap: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.Logo}>
                        <Text style={{ color: '#2D9CDB' }}>Ser</Text>
                        <Text style={{ color: '#F2C94C' }}>Bank</Text>
                    </Text>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{ color: 'gray' }} />
                </View>
                <Text style={styles.title}>
                    Bem vindo ao banco do futuro!
                </Text>
                <Text style={styles.subtitleHead}>
                    Seu primeiro passo para a liberdade financeira começa aqui
                </Text>
            </View>

            {/* Sessão de Login */}
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="CPF"
                        style={styles.input}
                        value={cpf}
                        onChangeText={setCpf} // Atualiza o estado do CPF
                    />
                    <FontAwesomeIcon icon={faUser} style={styles.inputIcon} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword} // Atualiza o estado da senha
                    />
                    <FontAwesomeIcon icon={faEye} style={styles.inputIcon} />
                </View>
                <Text style={styles.link}>Esqueci a Senha</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                {/* Sessão de Links */}
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.subtitle}>Não tem uma conta? <Text style={styles.link}>Sign Up</Text></Text>
                    <Text style={styles.Terms}>
                        Para continuar, você tem que aceitar nossos{' '}
                        <Text style={styles.linkOfTerms}>Termos</Text> e{' '}
                        <Text style={styles.linkOfTerms}>Política de Privacidade</Text>.
                    </Text>
                </View>
            </View>
        </View>
    );
}