import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import fonts from '../styles/fonts'
import colors from '../styles/colors'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Details({ icon, text, value }) {
  return (
    <View style={styles.container}>

      {icon === 'people' ? (
        <FontAwesome name="user" size={35} color={colors.colorIcon} />
      ) : (
        <MaterialCommunityIcons name="arm-flex" size={35} color={colors.colorIcon} />
      )}

      <Text style={styles.text}>
        Massa {text}
      </Text>

      <Text style={styles.value}>
        {value}Kg
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '35%',
    height: 85,
    width: Dimensions.get('window').width * 0.28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75
  },

  text:{
    fontSize: 16,
    color: colors.textMass,
    fontFamily: fonts.bold,
    marginTop: 4,
    marginBottom: 4,
  },

  value:{
    fontSize: 16,
    color: colors.weightCadr,
    fontFamily: fonts.medium
  },
})