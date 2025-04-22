import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'; //  caminho do arquivo de estilos

// Define os tipos das suas rotas
type RootStackParamList = {
  Inicio: undefined;
  Status: undefined;
  Explorar: undefined;
  Perfil: undefined;
  // Adicione outras rotas aqui conforme necessário
};

interface Props {
  navigation?: any; // O tipo de navegação pode ser mais específico se você estiver usando um tipo de navegação específico
}
/// Componente NavigationBar
/// Este componente é uma barra de navegação personalizada que permite navegar entre diferentes telas do aplicativo.
const NavigationBar: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<keyof RootStackParamList>("Inicio");

  const navigateTo = (screenName: keyof RootStackParamList) => { // Define o tipo de screenName
    setActiveTab(screenName);
    if (navigation) {
      navigation.navigate(screenName);
    } else {
      console.warn("Navigation prop not passed to NavigationBar component.");
    }
  };
/// Renderiza a barra de navegação
  /// A barra de navegação contém botões para navegar entre as telas "Inicio", "Status", "Explorar" e "Perfil".
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigateTo("Inicio")}
      >
        <Ionicons // Ícone de casa
          name="home"
          size={24}
          color={activeTab === "Inicio" ? '#673AB7' : '#777'} 
        />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === "Inicio" ? '#673AB7' : '#777' },
          ]}
        >
          Início 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity // Botão de Status
        // Este botão pode ser usado para mostrar o status do usuário ou do aplicativo  
        style={styles.tab}
        onPress={() => navigateTo("Status")}
      >
        <Ionicons // Ícone de gráfico de pizza
          name="pie-chart"
          size={24}
          color={activeTab === "Status" ? '#673AB7' : '#777'}
        />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === "Status" ? '#673AB7' : '#777' },
          ]}
        >
          Status
        </Text>
      </TouchableOpacity>

{/* Botão do meio (adicionar) */}
      {/* Este botão pode ser usado para adicionar algo*/}

      <View style={styles.middleButtonContainer}>
        <TouchableOpacity style={styles.middleButton}>
          <View style={styles.middleButtonContent}>
            <Ionicons name="add" size={32} color="#424242" />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity // Botão de Explorar
        style={styles.tab}
        onPress={() => navigateTo("Explorar")}
      >
        <Ionicons // Ícone de bússola
          name="compass"
          size={24}
          color={activeTab === "Explorar" ? '#673AB7' : '#777'}
        />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === "Explorar" ? '#673AB7' : '#777' },
          ]}
        >
          Explorar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity // Botão de Perfil
        style={styles.tab}
        onPress={() => navigateTo("Perfil")}
      >
        <Ionicons
          name="person"
          size={24}
          color={activeTab === "Perfil" ? '#673AB7' : '#777'}
        />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === "Perfil" ? '#673AB7' : '#777' },
          ]}
        >
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;