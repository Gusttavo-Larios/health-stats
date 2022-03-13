import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors'

import Start from '../pages/Start'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import ChangeData from '../pages/ChangeData'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{
      cardStyle: {
        backgroundColor: colors.textButton
      }
    }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="ChangeData" component={ChangeData} />
    </Stack.Navigator>
  );
}
