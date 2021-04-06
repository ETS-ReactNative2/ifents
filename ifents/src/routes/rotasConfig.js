import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Configs from '../pages/configs/index'
import Editar from '../pages/configs/edit/index'
<<<<<<< HEAD
=======
import Saiba from '../pages/know_more/index'

>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c

const Stack = createStackNavigator()

export default function Config() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Configs" component={Configs} options={{ headerShown: false }} />
            <Stack.Screen name="Editar" component={Editar} options={{ headerShown: false }} />
<<<<<<< HEAD
=======
            <Stack.Screen name="Saiba" component={Saiba} options={{ headerShown: false }} />
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
        </Stack.Navigator>
    )
}