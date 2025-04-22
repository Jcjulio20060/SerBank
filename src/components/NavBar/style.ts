import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8', // Cor de fundo da barra
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
    height: 60, // Altura da barra
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 5,
  },
  middleButtonContainer: {
    position: 'absolute',
    bottom: 20, // Ajuste conforme necessário para a elevação
    left: '50%',
    transform: [{ translateX: -30 }], // Metade da largura do botão para centralizar
  },
  middleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFEB3B', // Cor do botão central
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra do botão
  },
  middleButtonContent: {
    // Estilos para o conteúdo interno do botão central, se necessário
  },
});