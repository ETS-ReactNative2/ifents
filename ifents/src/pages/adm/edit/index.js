import React, { useState } from 'react'
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, View, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { RectButton } from 'react-native-gesture-handler'
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../../services/api'
import styles from './styles'
import Colors from '../../../utils/colors'

export default function Cevento() {
    const navigation = useNavigation()
    const route = useRoute();
    const incident = route.params.incident;
    const [nome, setNome] = useState('')
    const [local, setLocal] = useState('')
    const [contato, setContato] = useState('')
    const [tipo, setTipo] = useState('')
    const [data_inicio, setData_inicio] = useState('')
    const [data_termino, setData_termino] = useState('')
    const [hora_inicio, setHora_inicio] = useState('')
    const [hora_termino, setHora_termino] = useState('')


    function _atualizar() {
        api.put(`evento/update/${incident.id}`, {
            nome: nome,
            local: local,
            contato: contato,
            tipo: tipo,
            data_inicio: data_inicio,
            data_termino: data_termino,
            hora_inicio: hora_inicio,
            hora_termino: hora_termino,
        }).then(response => { alert('Evento atualizado com sucesso!!!', navigation.navigate('Eventos')) }).catch(err => { alert(err) })
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Editar Evento</Text>
                </View>
                <KeyboardAvoidingView style={styles.content}>
                    <Text style={styles.text}>Qual o novo nome do seu evento</Text>
                    <TextInput style={styles.input} placeholder="Digite o nome do evento" keyboardType='default'
                        value={nome} onChangeText={setNome} returnKeyType={"next"}
                        onSubmitEditing={() => { secondTextInput.focus(); }} />

                    <Text style={styles.text}>Onde será o novo local do evento?</Text>
                    <TextInput style={styles.input} placeholder="Digite o local do evento" keyboardType='default'
                        value={local} onChangeText={setLocal} returnKeyType={"next"} ref={ref => {
                            secondTextInput = ref;
                        }} onSubmitEditing={() => { thirdTextInput.focus(); }} />

                    <Text style={styles.text}>Qual o novo contato do responsável?</Text>
                    <TextInput style={styles.input} keyboardType='numeric'
                        placeholder="(37) [9] 9999-9999" value={contato} onChangeText={setContato}
                        returnKeyType={"done"} ref={ref => {
                            thirdTextInput = ref;
                        }} />

                    <Text style={styles.text}>Qual o novo tipo do seu evento?</Text>
                    <DropDownPicker items={[
                        { label: 'Curso - Workshop/Palestra', value: 'Curso - Workshop/Palestra' },
                        { label: 'Atração - Spot/Concerto', value: 'Atração - Spot/Concerto' },
                        { label: 'Campeonato - Virtual/Físico', value: 'Campeonato - Virtual/Físico' },
                        { label: 'Outro', value: 'Outro' }]}
                        labelStyle={{
                            fontSize: 12, fontFamily: 'Roobert-Regular', textAlign: 'left',
                        }}
                        placeholder="Selecione uma opção uma opção"
                        dropDownStyle={{
                            borderRadius: 5, borderTop: 0, zIndex: 9999,
                        }}
                        onChangeItem={item => setTipo(JSON.stringify(item.value))}
                        style={styles.dropdown}
                        containerStyle={{ height: 50 }}
                        arrowColor={Colors.icon} zIndex={6000} arrowSize={20} />

                    <Text style={styles.text}>Quando o evento começa?</Text>
                    <View style={styles.date}>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            value={data_inicio}
                            onChangeText={setData_inicio}
                            style={styles.dateInput}
                            returnKeyType={"done"}
                            placeholder="Informe a data inicial"
                        />
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'HH:MM'
                            }}
                            value={hora_inicio}
                            onChangeText={setHora_inicio}
                            style={styles.hourInput}
                            returnKeyType={"done"}
                            placeholder="Horário"
                        />
                    </View>

                    <Text style={styles.text}>Quando o evento termina?</Text>
                    <View style={styles.date}>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            value={data_termino}
                            onChangeText={setData_termino}
                            style={styles.dateInput}
                            returnKeyType={"done"}
                            placeholder="Informe a data de termino"
                        />
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'HH:MM'
                            }}
                            value={hora_termino}
                            onChangeText={setHora_termino}
                            style={styles.hourInput}
                            returnKeyType={"done"}
                            placeholder="Horário"
                        />
                    </View>

                    <RectButton onPress={_atualizar} style={styles.button1} >
                        <Text style={styles.buttonText}>Atualizar Evento</Text>
                    </RectButton>

                </KeyboardAvoidingView>
            </View >
        </ScrollView>
    )
}