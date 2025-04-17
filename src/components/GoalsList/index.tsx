import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlaneDeparture, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../screens/home/style";

export default function GoalsList() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Objetivos</Text>
      
      <View style={styles.goalBox}>
        <View style={styles.goal}>
          <View style={styles.goalIcon}>
            <FontAwesomeIcon icon={faPlaneDeparture} size={16} style={{ color: "#1218C6" }} />
          </View>
          <View>
            <Text style={styles.goalTitle}>Viagem do Sonho</Text>
            <Text style={styles.goalSubtitle}>$299 of $999</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: "30%" }]} />
        </View>
      </View>

      <View style={styles.goalBox}>
        <View style={styles.goal}>
          <View style={styles.goalIcon}>
            <FontAwesomeIcon icon={faGamepad} size={16} />
          </View>
          <View>
            <Text style={styles.goalTitle}>Meu próximo Play</Text>
            <Text style={styles.goalSubtitle}>$800 of $1200</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: "67%" }]} />
        </View>
      </View>
    </View>
  );
}
