import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Evento from '../pages/eventos/index'
import Details from '../pages/details/index'
import EditEvento from '../pages/adm/edit/index'

const Stack = createStackNavigator()

export default function EventoRotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Eventos" component={Evento} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            <Stack.Screen name="EditEvento" component={EditEvento} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}