import "react-native-gesture-handler";

import React from "react";
import Routes from "./src/Routes";
import COLORS from "./src/assets/Utils/Colors";
import { StatusBar, SafeAreaView } from "react-native";
import Preloader from "./src/components/Preloader";

import AuthProvider from "./src/context/auth";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";

import {
  Lexend_100Thin,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold,
} from "@expo-google-fonts/lexend";

import { Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";

import {
  Inter_400Regular,
  Inter_300Light,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
    Lexend_100Thin,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_300Light,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    <Preloader />;
    return null;
  }

  console.disableYellowBox = true;
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.bg,
      primary: COLORS.bg,
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar hidden={true} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
