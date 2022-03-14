import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Toast from "react-native-toast-message";

import Routes from "~/routes";
import UserProvider from "~/Context/UserContext";
import PersonalizedToast from "~/components/Toast";
import theme from "~/theme";

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
    <>
      <UserProvider>
        <StatusBar hidden={true} />
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </UserProvider>
      <PersonalizedToast />
    </>
  );
}
