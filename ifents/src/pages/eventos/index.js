import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, ScrollView, Image, StatusBar, Alert, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'
import Ionic from 'react-native-vector-icons/Ionicons'


import styles from './styles'
import api from '../../services/api'

export default function Evento() {
    const navigation = useNavigation()
    const [incidents, setIncidents] = useState([]);
    const eventoID = AsyncStorage.getItem('eventoID');
    const [adm, setAdm] = useState('')
    const [likedPost, setLikedPost] = useState([])
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        async function pegarDados() {
            const usuario = await AsyncStorage.getItem('usuario');
            const jsonUser = JSON.parse(usuario);
            setAdm(jsonUser.adm)
        }
        pegarDados()
        api.get('evento').then(res => {
            setIncidents(res.data);
        })
    }, [incidents, likedPost])

    async function handleDeleteEvento(id) {
        api.delete(`evento/delete/${id}`).then(res => {
            const Filter = incidents.filter(incident => incident !== id)
            setIncidents(Filter);
        }).catch(err => { alert(err) })
    };

    function deletar(id) {
        Alert.alert(
            "Deletar",
            "Deseja realmente deletar esse evento?",
            [
                {
                    text: "Não",
                    style: "cancel"
                },
                { text: "Sim", onPress: () => handleDeleteEvento(id) }
            ]
        );

    }

    function navigateToDetail(incident) {
        navigation.navigate('Details', { incident });
    }

    function navigateToEdit(incident) {
        navigation.navigate('EditEvento', { incident });
    }

    function handleSelectItems(id) {
        const alreadySelected = likedPost.findIndex(item => item === id)
        if (alreadySelected >= 0) {
            api.put(`evento/unlike/${id}`).then(res => {
                const filteredItems = likedPost.filter(item => item !== id);
                setLikedPost(filteredItems);
            }).catch(err => { alert(err) })
        } else {
            api.put(`evento/like/${id}`).then(res => {
                setLikedPost([...likedPost, id]);
            }).catch(err => { console.log(err) })
        }
    }

    return (
        <View style={styles.content}>
            <StatusBar barStyle="dark-content" animated />
            <View style={styles.header}>
                <Avatar rounded source={require('../../../assets/img/avatar.png')}
                    size={40} containerStyle={{
                        padding: 4,
                        backgroundColor: '#FFF',
                    }} onPress={() => navigation.navigate('Perfil')} />
            </View>

            <View style={styles.container} >
                <FlatList
                    data={incidents}
                    style={styles.incidentList}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={incident => String(incident.id)}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: incident }) => (
                        <View style={styles.evento}>
                            <View style={styles.div}>
                                <Image style={styles.banner} source={require('../../../assets/img/banner.jpg')} />
                                <View style={styles.likes}>
                                    <Ionic style={styles.like} name={likedPost.includes(incident.id) ? "ios-heart" : "ios-heart-outline"} color='#304FFE' onPress={() => handleSelectItems(incident.id)} size={30} />
                                    <Text style={styles.likeText}>{incident.likes === null ? '0' : `${incident.likes}`}</Text>
                                </View>
                                <Text style={styles.titulo}>{incident.nome}</Text>
                            </View>
                            <View style={styles.div1}>
                                <Text style={styles.info}>Data: {incident.data_inicio} as {incident.hora_inicio}</Text>
                                <Text style={styles.info}>Local: {incident.local}</Text>
                                {adm ?

                                    <View style={styles.buttons}>
                                        <TouchableOpacity style={styles.botaoEdit} onPress={() => navigateToEdit(incident)}>
                                            <Icon style={styles.icon} name="edit" size={15} />
                                            <Text style={styles.textoBo}>Editar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botaoDel} onPress={() => deletar(incident.id)}>
                                            <Icon style={styles.icon} name="trash" size={15} />
                                            <Text style={styles.textoBo}>Excluir</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View style={styles.buttons}>
                                        <View style={styles.botaoHidden} onPress={() => { }}>
                                        </View>
                                        <View style={styles.botaoHidden} onPress={() => { }}>
                                        </View>
                                    </View>
                                }
                                <TouchableOpacity style={styles.botao} onPress={() => navigateToDetail(incident)}>
                                    <Icon style={styles.icon} name="chevron-right" size={15} />
                                    <Text style={styles.textoBo}>Saiba Mais</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)}
                />
            </View>
        </View>
    )
}