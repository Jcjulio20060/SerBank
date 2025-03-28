import { View, Text, TextInput, Button } from 'react-native';

export default function CadastroScreen(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Cadastro</Text>
            <TextInput 
                placeholder="Nome" 
                style={{ width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 20 }} 
            />
            <TextInput 
                placeholder="Email" 
                style={{ width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 20 }} 
            />
            <TextInput 
                placeholder="Senha" 
                secureTextEntry 
                style={{ width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 20 }} 
            />
            <Button title="Cadastrar" onPress={() => {}} />
        </View>
    )
}