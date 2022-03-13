import React from 'react';
import { View } from 'react-native';
import colors from '../styles/colors';

export default function Column({color, height}){
  return(
    <View style={{width: 44, backgroundColor: color, height: `${height}%`}}>
    </View>
  )
}