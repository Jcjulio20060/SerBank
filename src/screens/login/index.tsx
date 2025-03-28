import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
            <TextInput 
                placeholder="Username" 
                style={{ width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 20 }} 
            />
            <TextInput 
                placeholder="Password" 
                secureTextEntry 
                style={{ width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 20 }} 
            />
            <Button title="Login" onPress={() => {}} />
        </View>
    )
}