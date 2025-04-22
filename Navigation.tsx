import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/splash";
import LoginScreen from "./src/screens/login";
import HomeScreen from "./src/screens/home";
import CadastroScreen from "./src/screens/cadastro";
import HistoricoScreen from "./src/screens/historico";
import TransitionScreen from "./src/screens/transition";
import ValorPix from "./src/screens/transition/valorpix";
import ListaPix from "./src/screens/transition/listapix";
import Comprovante from "./src/screens/transition/comprovante";
import QRCodeScreen from "./src/screens/transition/qrcode";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}  />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Tela de Cadastro' }} />
        <Stack.Screen name="Historico" component={HistoricoScreen} options={{ title: 'Tela de Historico' }} />
        <Stack.Screen name="Transition" component={TransitionScreen} />
        <Stack.Screen name="ValorPix" component={ValorPix} />
        <Stack.Screen name="ListaPix" component={ListaPix} />
        <Stack.Screen name="Comprovante" component={Comprovante} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
