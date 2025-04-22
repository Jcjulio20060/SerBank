import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import NavigationActions from "../../components/NavigationActions";
import GoalsList from "../../components/GoalsList";
import TransactionsList from "../../components/TransactionsList";
import NavBar from "../../components/NavBar";
import { styles } from "./style";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, marginBottom: 16 }}>
      <ScrollView style={styles.container}>
        <Header />
        <Balance />
        <NavigationActions />
        <GoalsList />
        <TransactionsList />
      </ScrollView>
      <NavBar />
    </View>
  );
}
