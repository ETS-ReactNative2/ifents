import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, TextInput, KeyboardAvoidingView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import api from '../../../services/api';


export default function Editar() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [id, setId] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        async function pegarDados() {
            const usuario = await AsyncStorage.getItem('usuario');
            const jsonUser = JSON.parse(usuario);
            setId(jsonUser.id)
        }
        pegarDados()
    }, [])

    function atualizar() {
<<<<<<< HEAD
        api.put(`/usuario/update/${id}`, {
            email: email,
            senha: senha,
        }).then(res => { alert('Usuário atualizado com sucesso!!!', navigation.navigate('Configs')) }).catch(err => { alert(err) })
=======
        api.put(`/usuario/${id}`, {
            email: email,
            senha: senha,
        }).then(res => { navigation.navigate('Configs') }).catch(err => { console.log(err) })
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='chevron-left' style={{
                    borderRadius: 90,
                    padding: 6,
                }} size={18} onPress={() => navigation.goBack()} color='#121212' />
                <Text style={styles.headertext}>Editar</Text>
            </View>
            <KeyboardAvoidingView style={styles.inputbox}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Digite seu novo e-mail"
                    keyboardType='email-address' value={email}
                    onChangeText={setEmail} returnKeyType={"next"}
                    ref={(input) => { secondTextInput = input; }}
                    onSubmitEditing={() => { thirdTextInput.focus(); }} />
                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.input} secureTextEntry={true}
                    value={senha} placeholder="Digite sua nova senha" onChangeText={setSenha}
                    ref={(input) => { thirdTextInput = input; }} onSubmitEditing={atualizar} />
            </KeyboardAvoidingView>

            <View style={styles.buttonsbox}>
                <TouchableOpacity style={styles.button1} onPress={atualizar}
                    hitSlop={{ top: 20, left: 135, right: 135 }}>
                    <Text style={styles.buttonText}>Atualizar Dados</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
