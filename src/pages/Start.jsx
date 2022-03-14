import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

import ImageExercise from "~/assets/welcome-image.png";
import { Image, Message, Next, TitlePage } from "~/styles/stylesStart.js";
import Page from "~/components/Page";

export default function Start() {
  const navigation = useNavigation();

  async function next() {
    AsyncStorage.getItem("@user").then((user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Register");
      }
    });
  }

  return (
    <Page>
      <TitlePage>Gerencie seu peso {"\n"} de forma fácil</TitlePage>
      <Image resizeMode="contain" source={ImageExercise} />
      <Message>Tenha o controle do seu peso {"\n"} na palma da mâo</Message>
      <Next onPress={next}>
        <AntDesign name="right" size={50} color="#fff" />
      </Next>
    </Page>
  );
}
