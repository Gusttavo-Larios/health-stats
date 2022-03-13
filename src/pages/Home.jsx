import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import Deatils from '../components/Details'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Column from '../components/Column'

import balance from '../assets/balance-image.png'
import imcImage from '../assets/imc-image.png'
import status from '../assets/status-image.png'
import Stats from '../components/Stats';

import { useNavigation } from '@react-navigation/core'
import imc from '../calculations/imc'
import idealWeight from '../calculations/idealWeight'

import bodyMass from '../calculations/bodyMass'
import { UserContext } from '../Context/UserContext';

export default function Home() {
  const {
    name,
    setName,
    weight,
    setWeight,
    height,
    setHeight,
    age,
    setAge,
    sexo,
    setSexo
  } = useContext(UserContext)
  const [massIndex, setMassIndex] = useState(0)
  const [massIdeal, setMassIdeal] = useState('')

  const [fatMass, setFatMass] = useState(0)
  const [leanMass, setLeanMass] = useState(0)
  const [fatMassPercentage, setFatMassPercentage] = useState(0)

  useEffect(() => {
    async function resgateData() {
      try {
        setMassIndex(imc(weight, height))
        console.log(idealWeight(height))
        setMassIdeal(idealWeight(height))

        const stats = bodyMass(
          imc(weight, height),
          age,
          sexo,
          weight
        )

        setFatMass(stats.fatMass)
        setLeanMass(stats.leanMass)
        setFatMassPercentage(stats.fatMassPercentage)
      } catch (error) {
        console.log(error)
      }
    }
    resgateData()
  }, [])


  const navigation = useNavigation()
  function menu() {
    navigation.navigate('Menu')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textHeader}>Olá,</Text>
        <Text style={styles.textName}>{name}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.9} style={styles.menu}
        onPress={menu}>
        <Entypo name="menu" size={54} color="black" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.containerContent}>
          <Deatils text='Magra' value={leanMass} />

          <View style={styles.columns}>
            <Column color={colors.textMass} height={(100 * (fatMassPercentage / 100))} />
            <Column color={colors.colorIcon} height={(100 * ((100 - fatMassPercentage) / 100))} />
          </View>

          <Deatils icon="people" text='Gorda' value={fatMass} />
        </View>

        <Text style={styles.fatPercentage}>{fatMassPercentage}%</Text>
      </View>

      <View style={styles.details}>

        <Stats image={balance} text="Peso" value={`${weight}Kg`} colorText={colors.text} />

        <Stats image={imcImage} text="IMC" value={massIndex} colorText={colors.textNegative} />

        <Stats image={status} text="Ideal" value={massIdeal} colorText={colors.textNegative} />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  header: {
    width: Dimensions.get('window').width * 0.9,
    marginTop: 30
  },

  textHeader: {
    fontSize: 32,
    color: colors.textComplement,
    fontFamily: fonts.regular
  },

  textName: {
    fontSize: 32,
    color: colors.text,
    fontFamily: fonts.bold
  },

  menu: {
    position: 'absolute',
    zIndex: 9,
    top: 50,
    right: Dimensions.get('window').width - (Dimensions.get('window').width * .95),
    borderRadius: 20,
    elevation: 3,
    height: Dimensions.get('window').width * 0.16,
    width: Dimensions.get('window').width * 0.16,
    backgroundColor: colors.textButton,
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    backgroundColor: 'red',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.75,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    backgroundColor: colors.colorCard,
    marginTop: 10
  },

  containerContent: {
    width: '100%',
    height: Dimensions.get('window').width * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  columns: {
    height: '100%',
    width: 92,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  fatPercentage: {
    fontFamily: fonts.bold,
    color: colors.textNegative,
    fontSize: 30
  },

  details: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});