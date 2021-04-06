import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Configs from '../pages/configs/index'
import Editar from '../pages/configs/edit/index'

const Stack = createStackNavigator()

export default function Config() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Configs" component={Configs} options={{ headerShown: false }} />
            <Stack.Screen name="Editar" component={Editar} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}