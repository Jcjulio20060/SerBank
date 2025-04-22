import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colors = {
  primary: "#1A535C",
  accent: "#FFE66D",
  white: "#FFFFFF",
  gray: "#EDEDED",
  text: "#333333",
  lightGray: "#F5F5F5",
};


export default function ListaPix({ route, navigation }) {

  const { valorTransferencia } = route.params;

  // Contatos frequentes
  const frequentContacts = [
    { initials: "FN", name: "Fernando Neto", info: "BCO SANTANDER (... NU PARAMENTOS ..." },
    { initials: "JF", name: "José Filho", info: "REPAY" },
    { initials: "AF", name: "Allana Freitas", info: "BCO ITAÚ (... 4567)" },
  ];

  // Todos os contatos (incluindo os frequentes e mais alguns)
  const allContacts = [
    ...frequentContacts,
    { initials: "FN", name: "Fernando Antonio Tenorio de Oliveira Neto", info: "Chave Pix: fernando@email.com" },
    { initials: "AF", name: "Allana Carla Aquino Cordeiro de Freitas", info: "Chave Pix: 123.456.789-09" },
    { initials: "AA", name: "Atila Nascimento Andrade", info: "BCO BRADESCO (... 8910)" },
    { initials: "MC", name: "Mariana Costa Silva", info: "Chave Pix: (71) 98765-4321" },
    { initials: "LP", name: "Lucas Pereira Santos", info: "BCO SANTANDER (... 1112)" },
    { initials: "RA", name: "Rafaela Almeida Oliveira", info: "Chave Pix: rafaela@empresa.com" },
    { initials: "TS", name: "Thiago Souza Lima", info: "BCO ITAÚ (... 1314)" },
    { initials: "CS", name: "Camila Santos Rocha", info: "Chave Pix: (11) 91234-5678" },
    { initials: "PG", name: "Pedro Gonçalves Martins", info: "BCO BRADESCO (... 1516)" },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Transferência</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Conteúdo */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Para quem você quer transferir R$ {valorTransferencia.toFixed(2).replace(".", ",")}?</Text>
        
        <Text style={styles.subtitle}>Encontre um contato na sua lista ou inicie uma nova transferência</Text>
        
        {/* Barra de busca */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color={colors.primary} style={styles.searchIcon} />
          <TextInput 
  style={styles.searchInput}
  placeholder="Nome, CPF/CNPJ ou chave Pix"
  placeholderTextColor={colors.text}
  onSubmitEditing={(e) => {
    const valorDigitado = e.nativeEvent.text;
    if (valorDigitado.trim() !== "") {
      navigation.navigate("Comprovante", {
        nome: valorDigitado,
        chave: "Chave Pix: " + valorDigitado,
        valor: valorTransferencia,
        bancoOrigem: "BCO NUBANK",
        bancoDestino: "BCO INTER",
        comprovanteId: Math.floor(100000000 + Math.random() * 900000000).toString(),
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }
  }}
/>
        </View>
        
        {/* Contatos frequentes */}
       
        
        {/* Todos os contatos */}
        <Text style={styles.sectionTitle}>Todos os contatos</Text>
        <View style={styles.allContacts}>
          {allContacts.map((contact, index) => (
            <TouchableOpacity
            key={index}
            style={styles.contactItem}
            onPress={() => {
              navigation.navigate("Comprovante", {
                nome: contact.name,
                chave: contact.info,
                valor: valorTransferencia,
                bancoOrigem: "BCO NUBANK",
                bancoDestino: "BCO ITAÚ",
                comprovanteId: Math.floor(100000000 + Math.random() * 900000000).toString(),
                data: new Date().toLocaleDateString(),
                hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              });
            }}
          >
              <View style={styles.avatarSmall}>
                <Text style={styles.avatarTextSmall}>{contact.initials}</Text>
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactDetail}>{contact.info}</Text>
              </View>
              <Icon name="chevron-right" size={24} color={colors.primary} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },
  sectionTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  frequentContacts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  contactCard: {
    width: '30%',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  contactInfo: {
    alignItems: 'center',
  },
  contactName: {
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactDetail: {
    color: colors.text,
    fontSize: 12,
    textAlign: 'center',
  },
  allContacts: {
    marginBottom: 40,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarTextSmall: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});