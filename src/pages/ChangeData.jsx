import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import isVoid from '../validations/inputValidations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../Context/UserContext';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'

export default function ChangeData() {
  const navigation = useNavigation()

  const {
    name,
    setName,
    weight,
    setWeight,
    height,
    setHeight,
    sexo,
    setSexo
  } = useContext(UserContext)
  const [isVisible, setIsVisible] = useState(true)

  async function saveData() {
    Keyboard.dismiss()
    try {
      if (
        isVoid(weight)
      ) {
        await AsyncStorage.setItem('@weight', weight)
      }

      if (
        isVoid(height)
      ) {
        await AsyncStorage.setItem('@height', height)
      }

      if (
        isVoid(sexo)
      ) {
        await AsyncStorage.setItem('@sexo', sexo)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', openKeyboard)
    Keyboard.addListener('keyboardDidHide', closeKeyboard)
  }, [])

  function openKeyboard() {
    setIsVisible(false)
  }

  function closeKeyboard() {
    setIsVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SimpleLineIcons name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Alterar dados</Text>
        </View>

        {isVisible && <Text style={styles.description}>Alterar peso, altura e nome</Text>}
      </View>

      <View style={styles.containerInput}>

        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor={colors.text} onChangeText={(value) => setName(value)} />

        <TextInput maxLength={5} keyboardType='numeric' style={styles.input} placeholder="Peso(Kg)" placeholderTextColor={colors.text} onChangeText={(value) => setWeight(value)} />

        <TextInput maxLength={5} keyboardType='numeric' style={styles.input} placeholder="Altura(cm)" placeholderTextColor={colors.text} onChangeText={(value) => setHeight(value)} />

        <TextInput style={styles.input} placeholder="Sexo" placeholderTextColor={colors.text} onChangeText={(value) => setSexo(value)} />

      </View>

      <TouchableOpacity onPress={saveData} activeOpacity={0.7} style={styles.button}>
        <Text style={styles.textButton}>Confirmar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    width: Dimensions.get('window').width * 0.9,
    marginTop: 40
  },

  subHeader: {
    width: Dimensions.get('window').width * 0.62,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontFamily: fonts.medium
  },

  description: {
    fontSize: 16,
    fontFamily: fonts.light
  },

  containerInput: {
    marginTop: 20,
    justifyContent: 'space-between',
    height: Dimensions.get('window').width * 0.65,
  },

  input: {
    backgroundColor: colors.colorCard,
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    textAlign: 'center',
    fontFamily: fonts.regular,
    fontSize: 18,
    borderRadius: 8,
    padding: 5
  },

  button: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: colors.colorButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    marginTop: 15,
    color: colors.text
  },

  textButton: {
    fontFamily: fonts.medium,
    color: colors.textButton,
    fontSize: 20
  },
})