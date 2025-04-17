import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF', // Fundo branco
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        width: '80%',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    Logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2D9CDB', // Azul para "Ser"
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#828282', // Cinza para subtítulos
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitleHead: {
        fontSize: 16,
        color: '#828282', // Cinza para subtítulos
        textAlign: 'left',
        marginBottom: 20,
    },
    Terms: {
        fontSize: 12,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#F3F4F6', // Cinza claro
        borderRadius: 12,
        marginBottom: 15,
        backgroundColor: '#F9F9F9', // Fundo claro
    },
    inputIcon: {
        marginRight: 10, // Espaço entre o ícone e o campo de texto
    },
    input: {
        flex: 1, // Ocupar o espaço restante
        fontSize: 18,
        color: '#424242',
    },
    button: {
        width: '100%',
        padding: 15,
        marginTop: 30,
        backgroundColor: '#F2C94C', // Amarelo
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 2, // Sombra para Android
    },
    buttonText: {
        color: '#424242', // Texto branco
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    link: {
        color: '#2D9CDB', // Azul para links
        textAlign: 'right',
    },
    linkOfTerms: {
        color: '#2D9CDB', // Azul para links
        textDecorationLine: 'underline',
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    rememberText: {
        fontSize: 14,
        color: '#333333',
    },
});