import React, { useState } from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import UserProvider from "./src/Context/UserContext";

export default function App() {
  try {
    const [fontsLoaded] = useFonts({
      Roboto_300Light,
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold,
    });

    if (!fontsLoaded) {
      <AppLoading />;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <UserProvider>
      <StatusBar hidden={true} />
      <Routes />
    </UserProvider>
  );
}
