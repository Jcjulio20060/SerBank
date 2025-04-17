import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <FontAwesomeIcon icon={faLock} size={16} color="#10B981" />
        <Text style={{ fontSize: 12, color: "#7D7D7D" }}>Bank-grade Security</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
        <FontAwesomeIcon icon={faCircleCheck} size={16} color="#10B981" />
        <Text style={{ fontSize: 12, color: "#7D7D7D" }}>FDIC Insured</Text>
      </View>
    </View>
  );
}