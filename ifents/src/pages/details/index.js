import React, { useState } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';

import styles from './styles'

export default function Details() {
    const route = useRoute();
    const incident = route.params.incident;

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            <View style={styles.background}>
                <Image style={styles.banner} source={require('../../../assets/img/bannner2.png')} />
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>{incident.nome}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>Local: {incident.local}</Text>
                    <Text style={styles.text}>Tipo: {incident.tipo}</Text>
                    <Text style={styles.text}>Contato do organizador: {incident.contato}</Text>
                    <Text style={styles.text}>Começa dia {incident.data_inicio} as {incident.hora_inicio}</Text>
                    <Text style={styles.text}>Termina dia {incident.data_termino} as {incident.hora_termino}</Text>
                </View>
            </View >
        </ScrollView>
    )
}