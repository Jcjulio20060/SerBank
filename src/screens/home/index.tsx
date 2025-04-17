import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import NavigationActions from "../../components/NavigationActions";
import GoalsList from "../../components/GoalsList";
import TransactionsList from "../../components/TransactionsList";
import { styles } from "./style";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Balance />
      <NavigationActions />
      <GoalsList />
      <TransactionsList />
    </ScrollView>
  );
}
