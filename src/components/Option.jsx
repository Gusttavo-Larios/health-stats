import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core'


export default function Option({page}){
  const navigation = useNavigation()

  function next(){
    navigation.navigate(page)
  }

  return(
      <TouchableOpacity activeOpacity={0.95} onPress={next} style={styles.container}>
        <Text style={styles.titleOption}>Alterar dados</Text>
        <Text style={styles.descriptionOption}>Alterar peso, altura e nome</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width: Dimensions.get('window').width * 0.9,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.colorCard,
    borderRadius: 8
  },

  titleOption:{
    fontSize: 18,
    fontFamily: fonts.medium
  },

  descriptionOption:{
    fontSize: 16,
    fontFamily: fonts.light,
  }
})