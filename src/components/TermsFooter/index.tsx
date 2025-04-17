import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../screens/login/style';

export default function TermsFooter() {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.subtitle}>
        Não tem uma conta?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.Terms}>
        Para continuar, você tem que aceitar nossos{' '}
        <Text style={styles.linkOfTerms}>Termos</Text> e{' '}
        <Text style={styles.linkOfTerms}>Política de Privacidade</Text>.
      </Text>
    </View>
  );
}
