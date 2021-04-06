import React, { useState, useEffect, useContext } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, TextInput, Alert, View, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import api from '../../services/api'
import ContextoAuth from '../../provider/provedorAuth'

export default function Login() {
    const [ra, setRa] = useState('');
    const [senha, setSenha] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused1, setIsFocused1] = useState(false);
    const navigation = useNavigation();
    const auth = useContext(ContextoAuth)

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }))
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start()
    }, []);

    function onFocusChange() {
        setIsFocused(true)
    }

    function onFocusChange1() {
        setIsFocused1(true)
    }

    function onBlurChange() {
        setIsFocused(false)
    }

    function onBlurChange1() {
        setIsFocused1(false)

    }

    async function _login() {
        api.post('/usuario/login', {
            ra: ra,
            senha: senha
        }).then(response => {
            const { token, usuario } = response.data;
            AsyncStorage.multiSet([
                ['token', token],
                ['usuario', JSON.stringify(usuario)]
            ]);
            auth.setToken(token)
            auth.setLogado(true)
            console.log('oi')
        }).catch(err => {
            Alert.alert('', 'Usuário ou senha incorretos')
            console.log(err)
        })
    }

    function navegarRegistro() {
        navigation.navigate('Registro')
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Animated.View style={[styles.logobox, {
                transform: [
                    { translateY: offset.y }
                ]
            }]}>
                <Animated.Image source={require('../../../assets/img/logo.png')} style={styles.logo} />
            </Animated.View>
            <View style={styles.inputbox}>
                <Text style={styles.text}>Registro Acadêmico</Text>
                <TextInput onFocus={onFocusChange} onBlur={onBlurChange} keyboardType='numeric'
                    style={isFocused ? styles.lame : styles.input}
                    value={ra} onChangeText={setRa} returnKeyType={"next"}
                    onSubmitEditing={() => { secondTextInput.focus(); }} />

                <Text style={styles.text}>Senha</Text>
                <TextInput onFocus={onFocusChange1} onBlur={onBlurChange1}
                    style={isFocused1 ? styles.lame : styles.input} secureTextEntry={true}
                    value={senha} onChangeText={setSenha} ref={(input) => { secondTextInput = input; }}
                    onSubmitEditing={() => { _login }} returnKeyType={"done"} />
            </View>
            <View style={styles.buttonsbox}>
                <TouchableOpacity onPress={_login} style={styles.button1}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navegarRegistro} style={styles.button2}>
                    <Text style={styles.buttonText1}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    )
}
