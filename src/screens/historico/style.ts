import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'; // Importa funções para escalonar tamanhos de forma responsiva.
import { Ionicons } from '@expo/vector-icons'; // Importa a biblioteca de ícones Ionicons do Expo.

// Cria um objeto de estilos usando StyleSheet.create, otimizado para performance.
export const styles = StyleSheet.create({
  // Estilos para o componente ImageBackground que envolve a tela.
  backgroundImage: { // BUG NESSE Código
   // flex: 1, // Faz a imagem de fundo ocupar toda a tela.
    //resizeMode: 'cover', // Redimensiona a imagem para cobrir a tela mantendo a proporção.
    // Outras opções: 'stretch' (estica sem manter proporção), 'contain' (encaixa mantendo proporção, pode sobrar espaço).
  },

  // Estilos para o container principal da tela.
  container: {
    flex: 1, // Ocupa todo o espaço disponível.
    backgroundColor: '#F5F5DC', // Define a cor de fundo como bege claro.
  },

  // Estilos para o cabeçalho da tela.
  header: {
    flexDirection: 'row', // Organiza os itens do cabeçalho em linha (horizontalmente).
    alignItems: 'center', // Alinha os itens verticalmente ao centro.
    paddingHorizontal: scale(50), // Adiciona preenchimento horizontal escalonado.
    paddingVertical: verticalScale(50), // Adiciona preenchimento vertical escalonado.
    backgroundColor: '#FFE66D', // Define a cor de fundo do cabeçalho como outro tom de bege claro.
    borderBottomWidth: 1, // Adiciona uma borda inferior de 1 pixel.
    borderBottomColor: '#FFE66D', // Define a cor da borda inferior.
  },

  // Estilos para o botão de voltar no cabeçalho.
  backButton: {
    marginRight: scale(15), // Adiciona margem à direita do botão (escalonada).
  },

  // Estilos para o título do cabeçalho.
  headerTitle: {
    fontSize: 20, // Define o tamanho da fonte.
    fontWeight: 'bold', // Define a fonte como negrito.
    color: '#1A535C', // Define a cor do texto.
    flex: 1, // Faz o título ocupar o espaço restante no cabeçalho.
    textAlign: 'center', // Alinha o texto ao centro.
  },

  // Estilos para o botão de ordenar no cabeçalho.
  sortButton: {
    marginLeft: scale(1), // Adiciona margem à esquerda do botão (escalonada).
  },

  // Estilos para a barra de filtros.
  filterBar: {
    flexDirection: 'row', // Organiza os botões de filtro em linha.
    paddingHorizontal: scale(30), // Preenchimento horizontal escalonado.
    paddingVertical: verticalScale(10), // Preenchimento vertical escalonado.
    backgroundColor: '#FFE66D', // Cor de fundo da barra de filtros.
  },

  // Estilos para cada botão de filtro.
  filterButton: {
    backgroundColor: '#D2BD59', // Cor de fundo do botão.
    borderRadius: 0, // Remove as bordas arredondadas.
    paddingVertical: verticalScale(5), // Preenchimento vertical escalonado.
    paddingHorizontal: scale(20), // Preenchimento horizontal escalonado.
    marginRight: scale(1), // Margem à direita entre os botões (escalonada).
  },

  // Estilos para o botão de filtro ativo (quando selecionado).
  filterButtonActive: {
    backgroundColor: '#D2BD59', // Mantém a mesma cor para indicar que está ativo (pode ser alterado para destacar).
  },

  // Estilos para o texto dos botões de filtro.
  filterButtonText: {
    fontSize: 15, // Tamanho da fonte do texto.
    color: '#1A535C', // Cor do texto.
  },

  // Estilos para o texto do botão de filtro ativo (pode ser diferente).
  filterButtonTextActive: {
    color: '#1A535C', // Mantém a mesma cor para indicar que está ativo (pode ser alterado).
  },

  // Estilos para o container da dica financeira.
  tipContainer: {
    paddingHorizontal: scale(5), // Preenchimento horizontal escalonado.
    paddingVertical: verticalScale(10), // Preenchimento vertical escalonado.
    width: '100%', // Ocupa toda a largura disponível.
    paddingBottom: verticalScale(80), // Adiciona preenchimento inferior para evitar que a lista cubra a dica.
  },

  // Estilos para a caixa que contém a dica financeira.
  tipBox: {
    backgroundColor: '#1A535C', // Cor de fundo da caixa da dica.
    borderRadius: 15, // Bordas arredondadas.
    padding: scale(15), // Preenchimento interno escalonado.
    flexDirection: 'row', // Organiza o ícone e o texto em linha.
    alignItems: 'center', // Alinha verticalmente o ícone e o texto ao centro.
  },

  // Estilos para o ícone da dica financeira.
  tipIcon: {
    marginRight: scale(1), // Adiciona margem à direita do ícone (escalonada).
  },

  // Estilos para o texto da dica financeira.
  tipText: {
    color: '#fff', // Cor do texto da dica (branco).
    fontSize: 14, // Tamanho da fonte do texto da dica.
  },

  // Estilos para a lista de histórico (FlatList).
  list: {
    flex: 0., // Não permite que a lista cresça além do seu conteúdo inicial.
    paddingHorizontal: scale(13), // Preenchimento horizontal escalonado.
  },

  // Estilos para cada item da lista de histórico.
  listItem: {
    flexDirection: 'row', // Organiza os elementos do item em linha.
    justifyContent: 'space-between', // Espaça os elementos horizontalmente (esquerda e direita).
    alignItems: 'center', // Alinha os elementos verticalmente ao centro.
    backgroundColor: '#4ECDC4', // Cor de fundo do item da lista (verde claro).
    padding: scale(10), // Preenchimento interno escalonado.
    marginBottom: verticalScale(8), // Margem inferior entre os itens (escalonada).
    borderRadius: 15, // Bordas arredondadas.
  },

  // Estilos para a parte esquerda do item da lista (ícone e texto).
  listItemLeft: {
    flexDirection: 'row', // Organiza o ícone e o texto em linha.
    alignItems: 'center', // Alinha verticalmente o ícone e o texto ao centro.
  },

  // Estilos para o container do ícone do item da lista.
  listItemIcon: {
    backgroundColor: '#4ECDC4', // Cor de fundo do ícone (verde mais escuro - mesma cor do item).
    borderRadius: 14, // Faz o fundo do ícone ser circular.
    width: scale(28), // Largura escalonada do ícone.
    height: scale(28), // Altura escalonada do ícone.
    justifyContent: 'center', // Alinha o ícone interno ao centro horizontalmente.
    alignItems: 'center', // Alinha o ícone interno ao centro verticalmente.
    marginRight: scale(10), // Margem à direita do ícone (escalonada).
  },

  // Estilos para a descrição do item da lista.
  listItemDescription: {
    fontSize: 16, // Tamanho da fonte da descrição.
    fontWeight: 'bold', // Fonte em negrito.
    color: '#333', // Cor do texto (cinza escuro).
  },

  // Estilos para a categoria do item da lista.
  listItemCategory: {
    fontSize: 12, // Tamanho da fonte da categoria.
    color: '#777', // Cor do texto (cinza claro).
  },

  // Estilos para o valor do item da lista.
  listItemValue: {
    fontSize: 16, // Tamanho da fonte do valor.
    color: '#333', // Cor do texto (cinza escuro).
    fontWeight: 'bold', // Fonte em negrito.
  },

  // Estilos para valores positivos (entradas).
  valuePositive: {
    color: 'green', // Cor verde.
  },

  // Estilos para valores negativos (saídas).
  valueNegative: {
    color: 'red', // Cor vermelha.
  },
});