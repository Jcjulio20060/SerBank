import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator"; // Tab Navigator
import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/login";
import CadastroScreen from "../screens/cadastro";
import HistoricoScreen from "../screens/historico";
import TransitionScreen from "../screens/transition";
import ValorPix from "../screens/transition/valorpix";
import ListaPix from "../screens/transition/listapix";
import Comprovante from "../screens/transition/comprovante";
import QRCodeScreen from "../screens/transition/qrcode";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Transition" component={TransitionScreen} />
        <Stack.Screen name="ValorPix" component={ValorPix} />
        <Stack.Screen name="ListaPix" component={ListaPix} />
        <Stack.Screen name="Comprovante" component={Comprovante} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
