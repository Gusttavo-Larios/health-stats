import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext } from 'react';
import { View } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import isVoid from '../validations/inputValidations';

export const UserContext = createContext()

function UserProvider(props) {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [sexo, setSexo] = useState('')

  useEffect(() => {
    try {
      saveData()
    } catch (error) {
      console.log(error)
    }
  }, [name, weight, height, age, sexo])

  async function saveData() {
    if (isVoid(name)) {
      await AsyncStorage.setItem('@weight', name)
    }

    if (isVoid(weight)) {
      await AsyncStorage.setItem('@weight', weight)
    }

    if (isVoid(height)) {
      await AsyncStorage.setItem('@height', height)
    }

    if (isVoid(age)) {
      await AsyncStorage.setItem('@weight', age)
    }

    if (isVoid(sexo)) {
      await AsyncStorage.setItem('@sexo', sexo)
    }
  }

  return (
    <UserContext.Provider value={{
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
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;