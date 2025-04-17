import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import Header from "../../components/LogoHeader";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import SignupForm from "../../components/SingupForm/SingupForm";
import Footer from "../../components/Footer/Footer";
import { styles } from "./style";

export default function CadastroScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={{marginTop: 50}}></View>
      <Header />

      {/* Descrição */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Serviços bancários feitos para a Geração Z</Text>
        <Text style={styles.subtitle}>
          Comece sua jornada financeira cedo com o NexBank
        </Text>
      </View>

      {/* Imagem */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/illustration.png")} // Ensure this path is correct
          style={styles.image}
        />
      </View>

      {/* Recursos */}
      <FeatureCard
        title="Seguro e Protegido"
        description="Conta controlada pelos pais com notificações em tempo real"
        icon="shield"
      />
      <FeatureCard
        title="Fácil de Usar"
        description="Interface moderna projetada para usuários jovens"
        icon="smile"
      />

      {/* Formulário de Cadastro */}
      <SignupForm />

      {/* Rodapé */}
      <Footer />
    </ScrollView>
  );
}