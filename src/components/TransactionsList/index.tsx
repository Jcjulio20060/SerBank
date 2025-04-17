import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBurger, faGift, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../screens/home/style";

export default function TransactionsList() {
  const recentTransactions = [
    { title: "Comida e Drinks", icon: faBurger, amount: -12.99 },
    { title: "Presente de Aniversário", icon: faGift, amount: 50.0 },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.transactionHeader}>
        <Text style={styles.sectionTitle}>Transações Recentes</Text>
        <FontAwesomeIcon icon={faArrowRight} size={16} />
      </View>

      {recentTransactions.map((transaction, index) => (
        <View key={index} style={styles.transactionBox}>
          <View style={styles.transactionIcon}>
            <FontAwesomeIcon icon={transaction.icon} size={16} />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>{transaction.title}</Text>
            <Text
              style={[
                styles.transactionAmount,
                { color: transaction.amount < 0 ? "#E74C3C" : "#2ECC71" },
              ]}
            >
              {transaction.amount < 0 ? "-" : "+"}R${Math.abs(transaction.amount).toFixed(2)}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
