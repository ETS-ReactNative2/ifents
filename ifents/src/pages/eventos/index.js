import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, ScrollView, Image, StatusBar, Alert, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'
import Evil from 'react-native-vector-icons/Ionicons'


import styles from './styles'
import api from '../../services/api'

export default function Evento() {
    const navigation = useNavigation()
    const [incidents, setIncidents] = useState([]);
    const eventoID = AsyncStorage.getItem('eventoID');
    const [adm, setAdm] = useState('')
    const [likes, setLikes] = useState('0')

    useEffect(() => {
        async function pegarDados() {
            const usuario = await AsyncStorage.getItem('usuario');
            const jsonUser = JSON.parse(usuario);
            setAdm(jsonUser.adm)
        }
        pegarDados()
        api.get('evento', {
            headers: {
                Authorization: eventoID
            }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [eventoID])

    async function handleDeleteEvento() {
        try {
            await api.delete(`evento/delete/:${incidents.findIndex(incident => incident.id)}`, {
                headers: {
                    Authorization: eventoID,
                }
            });
            setIncidents(incidents.findIndex(incident => incident.id))
        } catch (err) {
            alert('Erro ao deletar evento, tente novamente.', console.log(incidents.findIndex(incident => incident.id)))
        }
    };

    function deletar() {
        Alert.alert(
            "Deletar",
            "Deseja realmente deletar esse evento?",
            [
                {
                    text: "Não",
                    onPress: () => console.log(incidents.findIndex(incident => incident.id)),
                    style: "cancel"
                },
                { text: "Sim", onPress: () => handleDeleteEvento() }
            ]
        );
    }

    return (
        <View style={styles.container} >
            <StatusBar barStyle="dark-content" animated />
            <View style={styles.header}>
                <Avatar rounded source={require('../../../assets/img/avatar.png')}
                    size={40} containerStyle={{
                        padding: 4,
                        backgroundColor: '#FFF',
                    }} onPress={() => navigation.navigate('Perfil')} />
            </View>
            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => incident.id}
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.evento}>
                        <View style={styles.div}>
                            <Image style={styles.banner} source={require('../../../assets/img/banner.jpg')} />
                            <View style={styles.likes}>
                                <Evil style={styles.like} name={"heart"} color='#304FFE' size={30} />
                                <Text style={styles.likeText}>{incident.likes}</Text>
                            </View>
                            <Text style={styles.titulo}>{incident.nome}</Text>
                        </View>
                        <View style={styles.div1}>
                            <Text style={styles.info}>Data: {incident.data_inicio} as {incident.hora_inicio}</Text>
                            <Text style={styles.info}>Local: {incident.local}</Text>
                            {adm ?

                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.botaoEdit} onPress={() => console.log(incident.id)}>
                                        <Icon style={styles.icon} name="edit" size={15} />
                                        <Text style={styles.textoBo}>Editar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.botaoDel} onPress={deletar}>
                                        <Icon style={styles.icon} name="trash" size={15} />
                                        <Text style={styles.textoBo}>Excluir</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={styles.buttons}></View>
                            }
                            <TouchableOpacity style={styles.botao} onPress={() => console.log(incident)}>
                                <Icon style={styles.icon} name="chevron-right" size={15} />
                                <Text style={styles.textoBo}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)}
            />
        </View>
    )
}