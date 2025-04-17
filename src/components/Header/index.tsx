import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../screens/home/style";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        <Text style={{ color: "#2D9CDB" }}>Ser</Text>
        <Text style={{ color: "#F2C94C" }}>Bank</Text>
      </Text>
      <View style={styles.headerIcons}>
        <FontAwesomeIcon icon={faBell} size={20} style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <FontAwesomeIcon icon={faRightFromBracket} size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
