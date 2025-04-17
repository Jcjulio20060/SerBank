import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../screens/home/style";

export default function Balance() {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceHeader}>
        <Text style={styles.balanceTitle}>Saldo Disponível</Text>
        <FontAwesomeIcon icon={faEyeSlash} size={20} style={styles.icon} />
      </View>
      <Text style={styles.balanceValue}>R$1.234,56</Text>
      <View style={styles.balanceActions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faArrowUp} size={15} style={styles.icon} />
          <Text style={styles.actionText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faArrowDown} size={15} style={styles.icon} />
          <Text style={styles.actionText}>Receber</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
