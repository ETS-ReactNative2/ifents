import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import api from '../../services/api'

export default function Perfil() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        async function pegarDados() {
            const usuario = await AsyncStorage.getItem('usuario');
            const jsonUser = JSON.parse(usuario);
            setNome(jsonUser.nome)
            setEmail(jsonUser.email)
        }
        pegarDados()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar barStyle="white-content" animated />
                <View style={styles.background}></View>
                <View style={styles.perfil}>
                    <Avatar rounded source={require('../../../assets/img/avatar.png')}
                        size={130} containerStyle={{
                            borderRadius: 90,
                            marginTop: -25,
                            borderWidth: 2,
                            padding: 2,
                            backgroundColor: '#FFF',
                            borderColor: '#E8EAF6',
                            justifyContent: 'center',
                        }} avatarStyle={{
                            height: '100%',
                            width: '100%'
                        }} onPress={() => { }} />

                    <View style={styles.infos}>
                        <Text style={styles.nome}>{nome}</Text>
                        <Text style={styles.nome1}>{email}</Text>
                    </View>
                </View>

            </View>
        </View >
    )
}
