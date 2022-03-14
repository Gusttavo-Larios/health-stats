import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import Toast from "react-native-toast-message";

import Page from "~/components/Page";
import {
  Emoji,
  TitlePage,
  ContainerUnform,
  InputRegister,
  NextLabel,
  Next,
} from "~/styles/stylesRegister";
import userSchema from "~/schemas/user.schema";

export default function Register() {
  const formRef = useRef(null);
  const navigation = useNavigation();

  function handleSubmit({ name, weight, height }) {
    userSchema.isValid({ name, weight, height }).then((isValid) =>
      isValid
        ? AsyncStorage.setItem(
            "@user",
            JSON.stringify({ name, weight, height })
          ).then(() => navigation.navigate("Home"))
        : Toast.show({
            type: "error",
            text1: "Hey!",
            text2: "Preencha os campos corretamente",
            topOffset: 40,
          })
    );
  }

  return (
    <Page>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={30}
      >
        <Emoji>😀</Emoji>
        <TitlePage>
          Precisamos de algumas {"\n"} informações sobre você
        </TitlePage>

        <ContainerUnform
          ref={formRef}
          placeholder="Nome"
          onSumbmit={handleSubmit}
        >
          <InputRegister
            name="Nome"
            type="text"
            maxLength={5}
            keyboardType="decimal-pad"
          />
          <InputRegister name="Peso" type="text" />
          <InputRegister
            name="Altura"
            type="text"
            maxLength={5}
            keyboardType="decimal-pad"
          />
        </ContainerUnform>
        <Next onPress={handleSubmit} activeOpacity={0.7}>
          <NextLabel>Confirmar</NextLabel>
        </Next>
      </KeyboardAvoidingView>
    </Page>
  );
}
