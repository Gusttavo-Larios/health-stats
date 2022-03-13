import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import exercise from '../assets/welcome-image.png'
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core'

export default function Start() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof resgateData() === 'undefined') {
      setLoading(true)
      navigation.navigate('Home')
      setTimeout(() => { setLoading(false), navigation.navigate('Home') }, 5000)
    }
  }, [])


  async function resgateData() {
    try {
      const storage = await AsyncStorage.getItem('@name')
      return storage
    } catch (error) {
      console.log(error)
    }
  }

  function next() {
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Gerencie seu peso {'\n'} de forma fácil</Text>

      <Image style={styles.image} resizeMode='contain' source={exercise} />

      <Text style={styles.message}>Tenha o controle do seu peso {'\n'} na palma da mâo</Text>

      {loading ?
        <ActivityIndicator size="small" color={colors.textComplement} /> :
        <TouchableOpacity onPress={next} activeOpacity={0.7} style={styles.button}>
          <MaterialIcons name="keyboard-arrow-right" size={50} color={colors.textButton} />
        </TouchableOpacity>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    marginTop: 50,
    fontSize: 25,
    textAlign: 'center',
    color: colors.text,
    fontFamily: fonts.bold
  },

  image: {
    height: Dimensions.get('window').width * 0.8,
    marginTop: 20
  },

  message: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.textComplement,
    fontFamily: fonts.light,
    marginTop: 25
  },

  button: {
    backgroundColor: colors.colorButton,
    padding: 7,
    borderRadius: 16,
    marginTop: 30
  }
})