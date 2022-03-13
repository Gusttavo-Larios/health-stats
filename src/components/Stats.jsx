import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import fonts from '../styles/fonts'
import colors from '../styles/colors'

export default function Stats({ image, colorText, text, value }) {
  return (
    <View style={styles.container}>

        <Image source={image} resizeMode='contain' style={styles.image}/>

      <Text style={styles.text}>
        {text}
      </Text>

      <Text style={{
        fontSize: 16,
        color: colorText,
        fontFamily: fonts.bold
      }}>
        {value}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: Dimensions.get('window').width * 0.43,
    width: Dimensions.get('window').width * 0.28,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.colorCard,
    borderRadius: 8,
    paddingBottom: 15,
    paddingTop: 18   
  },

  text:{
    fontSize: 16,
    color: colors.textMass,
    fontFamily: fonts.regular,
    marginTop: 4,
    marginBottom: 4,
  },

  image:{
    height: Dimensions.get('window').width * 0.2,
  }
})