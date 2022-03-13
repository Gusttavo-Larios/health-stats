import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import fonts from '../styles/fonts';
import Option from '../components/Option'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'

export default function Menu() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SimpleLineIcons name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Menu</Text>
      </View>

      <View style={styles.content}>
        <Option page="ChangeData" />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: Dimensions.get('window').width * 0.05
  },

  header: {
    width: Dimensions.get('window').width * 0.31,
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontFamily: fonts.medium
  },

  content: {
    marginTop: 15
  }
})