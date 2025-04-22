import React from "react";
import { View } from "react-native";
import LogoHeader from "../../components/LogoHeader";
import LoginForm from "../../components/LoginForm";
import TermsFooter from "../../components/TermsFooter";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  return (
    <View style={styles.mainContainer}>
      <LogoHeader />
      <LoginForm />
      <TermsFooter />
      <StatusBar style="dark" />
    </View>
  );
}
