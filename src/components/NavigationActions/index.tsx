import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCreditCard, faChartSimple, faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../screens/home/style";

export default function NavigationActions() {
  const navigation = useNavigation<any>(); // Replace 'any' with your navigation type if available
  return (
    <View style={styles.navigation}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Transition")}>
        <View style={[styles.navIcon, { backgroundColor: "#E0E7FF" }]}>
          <FontAwesomeIcon icon={faPix} size={24} style={{ color: "#0025DD" }} />
        </View>
        <Text style={styles.navText}>Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Transition")}>
        <View style={[styles.navIcon, { backgroundColor: "#E5E7EB" }]}>
          <FontAwesomeIcon icon={faCreditCard} size={24} style={{ color: "#2563EB" }} />
        </View>
        <Text style={styles.navText}>Cartão</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Transition")}>
        <View style={[styles.navIcon, { backgroundColor: "#FCE7F3" }]}>
          <FontAwesomeIcon icon={faChartSimple} size={24} style={{ color: "#DB2777" }} />
        </View>
        <Text style={styles.navText}>Análises</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Transition")}>
        <View style={[styles.navIcon, { backgroundColor: "#DBEAFE" }]}>
          <FontAwesomeIcon icon={faPiggyBank} size={24} style={{ color: "#D83AFB" }} />
        </View>
        <Text style={styles.navText}>Cofrinhos</Text>
      </TouchableOpacity>
    </View>
  );
}
