import React, { useState } from 'react'
import { Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import styles from './styles'

export default function Registro() {
    const navigation = useNavigation()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [ra, setRa] = useState('')
    const [senha, setSenha] = useState('')


    function _registro() {
        api.post('/usuario/create', {
            nome,
            email,
            ra,
            senha,
        }).then(response => { alert('Usuário criado com sucesso!!!', navigation.navigate('Login')) }).catch(err => { alert(err) })
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.text}>Nome</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome" keyboardType='default'
                    value={nome} onChangeText={setNome} blurOnSubmit={false} returnKeyType={"next"}
                    onSubmitEditing={() => { secondTextInput.focus(); }} />

                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Digite seu e-mail"
                    keyboardType='email-address' value={email}
                    onChangeText={setEmail} returnKeyType={"next"} ref={ref => {
                        secondTextInput = ref;
                    }}
                    onSubmitEditing={() => { thirdTextInput.focus(); }} />

                <Text style={styles.text}>Registro Acadêmico</Text>
                <TextInput style={styles.input} keyboardType='numeric'
                    placeholder="Digite seu R.A fornecido pelo IFMG" value={ra} onChangeText={setRa}
                    returnKeyType={"next"} ref={ref => {
                        thirdTextInput = ref;
                    }}
                    onSubmitEditing={() => { fourTextInput.focus(); }} />

                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.input} secureTextEntry={true}
                    value={senha} placeholder="Digite sua senha" onChangeText={setSenha}
                    ref={ref => {
                        fourTextInput = ref;
                    }} onSubmitEditing={() => { }} />

                <TouchableOpacity onPress={_registro} style={styles.button1}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
