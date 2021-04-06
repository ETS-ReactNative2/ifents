import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, ScrollView, Image, StatusBar, Alert, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Feather'
<<<<<<< HEAD
import Ionic from 'react-native-vector-icons/Ionicons'
=======
import Evil from 'react-native-vector-icons/Ionicons'
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c


import styles from './styles'
import api from '../../services/api'

export default function Evento() {
    const navigation = useNavigation()
    const [incidents, setIncidents] = useState([]);
    const eventoID = AsyncStorage.getItem('eventoID');
    const [adm, setAdm] = useState('')
<<<<<<< HEAD
    const [likedPost, setLikedPost] = useState([])
    const [likes, setLikes] = useState(0)
=======
    const [likes, setLikes] = useState('0')
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c

    useEffect(() => {
        async function pegarDados() {
            const usuario = await AsyncStorage.getItem('usuario');
            const jsonUser = JSON.parse(usuario);
            setAdm(jsonUser.adm)
        }
        pegarDados()
<<<<<<< HEAD
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
=======
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
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
        Alert.alert(
            "Deletar",
            "Deseja realmente deletar esse evento?",
            [
                {
                    text: "Não",
<<<<<<< HEAD
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
=======
                    onPress: () => console.log(incidents.findIndex(incident => incident.id)),
                    style: "cancel"
                },
                { text: "Sim", onPress: () => handleDeleteEvento() }
            ]
        );
    }

    return (
        <View style={styles.container} >
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
            <StatusBar barStyle="dark-content" animated />
            <View style={styles.header}>
                <Avatar rounded source={require('../../../assets/img/avatar.png')}
                    size={40} containerStyle={{
                        padding: 4,
                        backgroundColor: '#FFF',
                    }} onPress={() => navigation.navigate('Perfil')} />
            </View>
<<<<<<< HEAD

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
=======
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
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
        </View>
    )
}