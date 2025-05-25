import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // Fundo claro e moderno
    paddingHorizontal: scale(15),
  },

  // Cabeçalho da tela
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
    backgroundColor: "#FFE66D", // Azul moderno
    marginTop: verticalScale(40), // Margem superior para o cabeçalho
  },

  // Botão de voltar no cabeçalho
  backButton: {
    marginRight: scale(15),
  },

  // Título do cabeçalho
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#424242", // Texto branco
    textAlign: "center",
    flex: 1,
  },

  // Barra de filtros
  filterBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    backgroundColor: "#FFE66D", // Azul claro
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginBottom: verticalScale(10),
  },

  // Botão de filtro
  filterButton: {
    backgroundColor: "#D2BD59", // Azul claro para botões
    borderRadius: 8,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(15),
    marginHorizontal: scale(5),
  },

  // Botão de filtro ativo
  filterButtonActive: {
    backgroundColor: "#D2BD59", // Azul moderno para botão ativo
  },

  // Texto do botão de filtro
  filterButtonText: {
    fontSize: 14,
    color: "#424242", // Azul moderno
    fontWeight: "bold",
  },

  // Texto do botão de filtro ativo
  filterButtonTextActive: {
    color: "#FFFFFF", // Texto branco para botão ativo
  },

  // Lista de histórico (FlatList)
  list: {
    flex: 1,
    marginTop: verticalScale(10),
  },

  // Item da lista de histórico
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Fundo branco para itens
    padding: scale(15),
    marginBottom: verticalScale(10),
    borderRadius: 10,
    shadowColor: "#000", // Sombra para destacar os itens
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },

  // Parte esquerda do item da lista
  listItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },

  // Ícone do item da lista
  listItemIcon: {
    backgroundColor: "#EEF2FF", // Fundo azul claro para ícone
    borderRadius: 20,
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(10),
  },

  // Descrição do item da lista
  listItemDescription: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937", // Cinza escuro
  },

  // Categoria do item da lista
  listItemCategory: {
    fontSize: 12,
    color: "#6B7280", // Cinza médio
  },

  // Valor do item da lista
  listItemValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  // Valores positivos (entradas)
  valuePositive: {
    color: "#10B981", // Verde moderno
  },

  // Valores negativos (saídas)
  valueNegative: {
    color: "#EF4444", // Vermelho moderno
  },

  // Texto para lista vazia
  emptyText: {
    textAlign: "center",
    color: "#6B7280", // Cinza médio
    fontSize: 16,
    marginTop: verticalScale(20),
  },
});