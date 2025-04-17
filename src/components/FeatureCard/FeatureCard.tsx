import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShieldAlt, faSmile } from "@fortawesome/free-solid-svg-icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "shield" | "smile";
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const icons = {
    shield: faShieldAlt,
    smile: faSmile,
  };

  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        padding: 16,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon
        icon={icons[icon]}
        size={24}
        style={{ marginRight: 16, color: "#4CAF50" }}
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333333" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, color: "#7D7D7D" }}>{description}</Text>
      </View>
    </View>
  );
}