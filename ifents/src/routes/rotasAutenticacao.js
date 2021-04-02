import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../utils/colors'

import Login from '../pages/login/index'
import Registro from '../pages/register/index'

const Stack = createStackNavigator()

export default function RotasAutenticacao() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

            <Stack.Screen name="Registro" component={Registro} options={{
                headerStyle: {
                    backgroundColor: (Colors.white),
                    elevation: null,
                    shadowColor: 'transparent'
                },
                headerTitle: false,

            }} />
        </Stack.Navigator>
    )
}