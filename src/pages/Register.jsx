import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import isEmptyString from "../validations/inputValidations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { UserContext } from "../Context/UserContext";

export default function Register() {
  const { name, setName, weight, setWeight, height, setHeight } =
    useContext(UserContext);
  const navigation = useNavigation();

  function next() {
    Keyboard.dismiss();
    if (
      isEmptyString(name) == false ||
      isEmptyString(weight) == false ||
      isEmptyString(height) == false
    ) {
    } else {
      saveData();
      navigation.navigate("Home");
    }
  }

  async function saveData() {
    try {   
      await AsyncStorage.setItem("@name", name);
      await AsyncStorage.setItem("@weight", weight.replace(",","."));
      await AsyncStorage.setItem("@height", height.replace(",","."));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={30}
      >
        <View style={styles.content}>
          <Text style={styles.emoji}>😀</Text>

          <Text style={styles.title}>
            Precisamos de algumas {"\n"} informações sobre você
          </Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor={colors.textInputRegister}
            onChangeText={(value) => setName(value)}
          />

          <TextInput
            maxLength={5}
            keyboardType="decimal-pad"
            style={styles.input}
            placeholder="Peso"
            placeholderTextColor={colors.textInputRegister}
            onChangeText={(value) => setWeight(value)}
          />

          <TextInput
            maxLength={5}
            keyboardType="decimal-pad"
            style={styles.input}
            placeholder="Altura"
            placeholderTextColor={colors.textInputRegister}
            onChangeText={(value) => setHeight(value)}
          />
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={next}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.textButton}>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    marginTop: 60,
  },

  emoji: {
    fontSize: 60,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: fonts.medium,
    color: colors.textRegister,
  },

  containerInput: {
    marginTop: 30,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CFCFCF",
    height: 40,
    width: Dimensions.get("window").width * 0.65,
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 18,
    marginTop: 10,
  },

  button: {
    width: Dimensions.get("window").width * 0.65,
    backgroundColor: colors.colorButton,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    marginTop: 40,
  },

  textButton: {
    fontFamily: fonts.medium,
    color: colors.textButton,
    fontSize: 20,
  },
});
