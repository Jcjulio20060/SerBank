import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
// Importa os módulos e componentes necessários do React e do React Native.

import { useNavigation } from '@react-navigation/native';
// Importa o hook `useNavigation` da biblioteca de navegação para permitir a navegação entre telas.

import { Ionicons } from '@expo/vector-icons';
// Importa a biblioteca de ícones `Ionicons` do Expo para usar ícones pré-definidos.

import { styles } from './style'; // Importe os estilos do arquivo separado
// Importa os estilos definidos no arquivo 'style.ts' (ou '.js') para estilizar os componentes.

// Define a interface `HistoricoItem` para tipar os objetos que representam um item no histórico.
interface HistoricoItem {
  id: string; // Identificador único para cada item do histórico.
  descricao: string; // Descrição da transação (ex: "Pagamento Fatura").
  valor: string; // Valor da transação (formato string para incluir a moeda).
  categoria: string; // Categoria da transação (ex: "Contas", "Mercado").
  tipo: 'entrada' | 'saida'; // Tipo da transação, indicando se é uma entrada ou saída de dinheiro.
}

// `historicoData` é um array de objetos `HistoricoItem` que simula os dados do histórico financeiro.
const historicoData: HistoricoItem[] = [
  { id: '1', descricao: 'Pagamento Fatura', valor: 'R$ 100,00', categoria: 'Contas', tipo: 'saida' },
  { id: '2', descricao: 'Compra no débito', valor: 'R$ 25,00', categoria: 'Mercado', tipo: 'saida' },
  { id: '3', descricao: 'Pix Recebido', valor: 'R$ 150,00', categoria: 'Outros', tipo: 'entrada' },
  { id: '4', descricao: 'Compra no crédito', valor: 'R$ 33,00', categoria: 'Transporte', tipo: 'saida' },
  { id: '5', descricao: 'Compra no débito', valor: 'R$ 64,00', categoria: 'Restaurante', tipo: 'saida' },
  {id: '6', descricao: 'Pagamento Fatura', valor: 'R$ 155,00', categoria: 'Contas', tipo: 'saida' },
  { id: '7', descricao: 'Compra no débito', valor: 'R$ 58,00', categoria: 'Mercado', tipo: 'saida' },
  { id: '8', descricao: 'Pix Recebido', valor: 'R$ 110,00', categoria: 'Outros', tipo: 'entrada' },
  { id: '9', descricao: 'Compra no crédito', valor: 'R$ 3,00', categoria: 'Transporte', tipo: 'saida' },
  { id: '10', descricao: 'Compra no débito', valor: 'R$ 64,00', categoria: 'Restaurante', tipo: 'saida' },

  // Adicione mais itens conforme necessário
];

// `HistoricoScreen` é um componente funcional React que renderiza a tela do histórico financeiro.
const HistoricoScreen: React.FC = () => {
  // `useState` é um hook para adicionar um estado local ao componente.
  // `filtroAtivo` armazena o filtro atualmente ativo ('semana', 'mês', 'ano' ou null).
  // `setFiltroAtivo` é a função usada para atualizar o valor de `filtroAtivo`.
  const [filtroAtivo, setFiltroAtivo] = useState<string | null>(null);

  // `useNavigation()` retorna um objeto de navegação que pode ser usado para navegar entre telas.
  const navigation = useNavigation();

  // `handleFiltrar` é uma função que é chamada quando um botão de filtro é pressionado.
  // Ela atualiza o estado `filtroAtivo` com o filtro selecionado e loga a ação.
  const handleFiltrar = (filtro: string | null) => {
    setFiltroAtivo(filtro); // Atualiza o estado do filtro ativo.
    console.log(`Filtrando por: ${filtro}`); // Log para depuração, indicando qual filtro foi selecionado.
    // Aqui você implementaria a lógica real para filtrar os `historicoData` com base no `filtro`.
  };

  // `renderItem` é uma função que recebe um objeto `{ item }` e retorna o JSX para renderizar cada item da lista.
  const renderItem = ({ item }: { item: HistoricoItem }) => (
    // `View` que envolve cada item da lista, estilizado com `styles.listItem`.
    <View style={styles.listItem}>
      {/* `View` que agrupa o ícone e a descrição/categoria do item, alinhados à esquerda. */}
      <View style={styles.listItemLeft}>
        {/* `View` que envolve o ícone da categoria. */}
        <View style={styles.listItemIcon}>
          {/* Renderização condicional do ícone com base na `categoria` do item. */}
          {item.categoria === 'Contas' && <Ionicons name="document-text-outline" size={24} color="#333" />}
          {item.categoria === 'Mercado' && <Ionicons name="cart-outline" size={24} color="#333" />}
          {item.categoria === 'Outros' && <Ionicons name="cash-outline" size={24} color="#333" />}
          {item.categoria === 'Transporte' && <Ionicons name="car-outline" size={24} color="#333" />}
          {item.categoria === 'Restaurante' && <Ionicons name="restaurant-outline" size={24} color="#333" />}
        </View>
        {/* `View` que agrupa a descrição e a categoria do item. */}
        <View>
          <Text style={styles.listItemDescription}>{item.descricao}</Text>
          <Text style={styles.listItemCategory}>{item.categoria}</Text>
        </View>
      </View>
      {/* `Text` que exibe o valor da transação. */}
      {/* Aplica estilos condicionais (`valuePositive` para entradas, `valueNegative` para saídas). */}
      <Text style={[styles.listItemValue, item.tipo === 'entrada' ? styles.valuePositive : styles.valueNegative]}>
        {item.valor}
      </Text>
    </View>
  );

  // O `return` do componente define a estrutura visual da tela.
  return (
    // `View` principal que envolve toda a tela, estilizada com `styles.container`.
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpeg")} // Imagem de fundo da tela.
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        {/* Header da tela. */}
        <View style={styles.header}>
          {/* Botão para voltar à tela anterior. */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          {/* Título da tela. */}
          <Text style={styles.headerTitle}>Histórico</Text>
          {/* Botão para ordenar o histórico (funcionalidade não implementada aqui). */}
          <TouchableOpacity style={styles.sortButton}>
            <Ionicons name="swap-vertical-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Barra de filtros. */}
        <View style={styles.filterBar}>
          {/* Botão para exibir todos os itens (remover filtro ativo). */}
          <TouchableOpacity
            style={[styles.filterButton, filtroAtivo === null && styles.filterButtonActive]}
            onPress={() => handleFiltrar(null)}
          >
            <Text style={[styles.filterButtonText, filtroAtivo === null && styles.filterButtonTextActive]}>Filtrar</Text>
          </TouchableOpacity>
          {/* Botão para filtrar por semana. */}
          <TouchableOpacity
            style={[styles.filterButton, filtroAtivo === 'semana' && styles.filterButtonActive]}
            onPress={() => handleFiltrar('semana')}
          >
            <Text style={[styles.filterButtonText, filtroAtivo === 'semana' && styles.filterButtonTextActive]}>Semana</Text>
          </TouchableOpacity>
          {/* Botão para filtrar por mês. */}
          <TouchableOpacity
            style={[styles.filterButton, filtroAtivo === 'mês' && styles.filterButtonActive]}
            onPress={() => handleFiltrar('mês')}
          >
            <Text style={[styles.filterButtonText, filtroAtivo === 'mês' && styles.filterButtonTextActive]}>Mês</Text>
          </TouchableOpacity>
          {/* Botão para filtrar por ano. */}
          <TouchableOpacity
            style={[styles.filterButton, filtroAtivo === 'ano' && styles.filterButtonActive]}
            onPress={() => handleFiltrar('ano')}
          >
            <Text style={[styles.filterButtonText, filtroAtivo === 'ano' && styles.filterButtonTextActive]}>Ano</Text>
          </TouchableOpacity>
        </View>

        {/* `ScrollView` para conter a dica financeira (permite rolagem se o conteúdo for muito longo). */}
        <ScrollView style={styles.tipContainer}>
          {/* `View` que envolve a caixa da dica financeira. */}
          <View style={styles.tipBox}>
            {/* Ícone de lâmpada para a dica financeira. */}
            <Ionicons name="bulb-outline" size={24} color="#FFD700" style={styles.tipIcon} />
            {/* `Text` para o conteúdo da dica financeira. */}
            <Text style={styles.tipText}>
              Dica Financeira: Para um bom controle financeiro evite ultrapassar 30% do seu limite de crédito. Isso ajuda
              manter um orçamento equilibrado e a evitar juros desnecessários.
            </Text>
          </View>
        </ScrollView>

        {/* `FlatList` é um componente eficiente para renderizar listas de dados. */}
        <FlatList
          data={historicoData} // Os dados a serem exibidos na lista.
          renderItem={renderItem} // A função que renderiza cada item da lista.
          keyExtractor={(item) => item.id} // Função para extrair uma chave única para cada item (para otimização).
          style={styles.list} // Estilos para a `FlatList`.
        />
      </ImageBackground>
    </View>
  );
}

// Exporta o componente `HistoricoScreen` para que ele possa ser usado em outras partes da aplicação.
export default HistoricoScreen;