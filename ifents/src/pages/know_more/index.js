import React, { useState } from 'react'
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, View, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'
import styles from './styles'

export default function Cevento() {
    const [nome, setNome] = useState('')
    const [local, setLocal] = useState('')
    const [contato, setContato] = useState('')
    const [tipo, setTipo] = useState('')
    const [data_inicio, setData_inicio] = useState('')
    const [data_termino, setData_termino] = useState('')
    const [hora_inicio, setHora_inicio] = useState('')
    const [hora_termino, setHora_termino] = useState('')


    function _criar() {
        api.post('/evento/create', {
            nome,
            local,
            contato,
            tipo,
            data_inicio,
            data_termino,
            hora_inicio,
            hora_termino
        }).then(response => { navigation.navigate('Evento') }).catch(err => { console.log(err) })
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            <View style={styles.container}>
                <View style={styles.background}></View>
                <View style={styles.header}>
                    <Text style={styles.titulo}>evento</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Local: Sala 37</Text>
                    <Text style={styles.text}>Tipo: Palestra</Text>
                    <Text style={styles.text}>Começa dia 10/03/2021 as 9:30</Text>
                    <Text style={styles.text}>Termina dia 10/03/2021 as 10:30</Text>
                </View>
            </View >
        </ScrollView>
    )
}