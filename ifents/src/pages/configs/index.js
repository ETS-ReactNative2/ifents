import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'

import ContextoAuth from '../../provider/provedorAuth'

import styles from './styles'

export default function Principal() {
    const navigation = useNavigation()
    const auth = useContext(ContextoAuth)

    async function _logout() {
        await AsyncStorage.removeItem('token');
        auth.setLogado(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" animated />
            <View style={styles.header}>
                <Icon name='chevron-left' style={{
                    borderRadius: 90,
                    padding: 6,
                }} size={20} onPress={() => navigation.goBack()} color='#121212' />
                <Text style={styles.headertext}>Configurações</Text>
            </View>
            <View>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => navigation.navigate('Editar')}>
                        <View style={styles.botao}>
                            <Text style={styles.titulo}>Editar Perfil</Text>
                            <Text style={styles.legenda}>Edite as principais informações de seu perfil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Saiba')}>
                        <View style={styles.botao}>
                            <Text style={styles.titulo}>Termos de serviço</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.logout}>
                    <TouchableHighlight style={styles.sair} underlayColor="rgba(48, 79, 254, 0.5)"
                        onPress={_logout}>
                        <View >
                            <Text style={styles.logouttext}>Sair</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View >
    )
}
