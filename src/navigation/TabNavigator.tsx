import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Importar as telas
import HomeScreen from "../screens/home";
import InvestmentsScreen from "../screens/investments";
import HistoricoScreen from "../screens/historico"; // Substituindo Explore por Histórico
import AccountScreen from "../screens/account";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "help"; // Default value

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Investments") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "Historico") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Conta") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#673AB7",
        tabBarInactiveTintColor: "#777",
        tabBarStyle: {
          backgroundColor: "#F8F8F8",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          height: 60,
          marginBottom: 10,
        },
        headerShown: false,
      })}
    >
      {/* Ordem ajustada */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Historico" component={HistoricoScreen} />
      <Tab.Screen name="Investments" component={InvestmentsScreen} />
      <Tab.Screen name="Conta" component={AccountScreen} />
    </Tab.Navigator>
  );
}