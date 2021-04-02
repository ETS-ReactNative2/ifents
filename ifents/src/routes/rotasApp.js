import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'

import Colors from '../utils/colors'

import Eventos from '../pages/eventos/index'
import Perfil from '../pages/profile/index'
import Configs from '../routes/rotasConfig'
import Cevento from '../pages/adm/create/index'


const Tab = createBottomTabNavigator()

export default function RotasApp() {
    const [adm, setAdm] = useState('')

    useEffect(() => {
        async function pegarDados() {
            const usuario = await AsyncStorage.getItem('usuario');
            const jsonUser = JSON.parse(usuario);
            setAdm(jsonUser.adm)
            console.log(jsonUser)
        }
        console.log(adm)
        pegarDados()
    }, [])

    if (adm === 0) {
        return (
            <Tab.Navigator initialRouteName='Eventos'
                tabBarOptions={{
                    activeTintColor: (Colors.main1),
                    tabStyle: {
                        backgroundColor: (Colors.white),
                        alignItems: 'center',
                        borderBottomWidth: 0.2,
                        borderColor: (Colors.icon),
                    },
                    labelStyle: {
                        fontFamily: 'Roobert-Regular',
                        fontSize: 11,
                        marginBottom: 4
                    },
                }} >

                <Tab.Screen name="Eventos" component={Eventos} options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="calendar" color={color} size={focused ? 22 : 20} />
                    )
                }} />

                <Tab.Screen name="Perfil" component={Perfil} options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="user" color={color} size={focused ? 22 : 20} />
                    )
                }} />

                <Tab.Screen name="Configs" component={Configs} options={{
                    tabBarLabel: 'Configurações',
                    tabBarVisible: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="settings" color={color} size={focused ? 22 : 20} />
                    )
                }} />
            </ Tab.Navigator >
        )
    } else {
        return (
            <Tab.Navigator initialRouteName='Eventos'
                tabBarOptions={{
                    activeTintColor: (Colors.main1),
                    tabStyle: {
                        backgroundColor: (Colors.white),
                        alignItems: 'center',
                        borderBottomWidth: 0.2,
                        borderColor: (Colors.icon),
                    },
                    labelStyle: {
                        fontFamily: 'Roobert-Regular',
                        fontSize: 11,
                        marginBottom: 4
                    },
                }} >

                <Tab.Screen name="Eventos" component={Eventos} options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="calendar" color={color} size={focused ? 22 : 20} />
                    )
                }} />

                <Tab.Screen name="Perfil" component={Perfil} options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="user" color={color} size={focused ? 22 : 20} />
                    )
                }} />

                <Tab.Screen name="Criar Evento" component={Cevento} options={{
                    tabBarLabel: 'Criar Evento',
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="layers" color={color} size={focused ? 22 : 20} />
                    )
                }} />

                <Tab.Screen name="Configs" component={Configs} options={{
                    tabBarLabel: 'Configurações',
                    tabBarVisible: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="settings" color={color} size={focused ? 22 : 20} />
                    )
                }} />
            </ Tab.Navigator >
        )
    }

}