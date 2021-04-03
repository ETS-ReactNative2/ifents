import { StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: (Colors.white),
    },
    background: {
        backgroundColor: "#3D5AFE",
        padding: 70,
        width: '100%'
    },
    perfil: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infos: {
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center'
    },
    nome: {
        //marginTop: 25,
        fontSize: 30,
        fontFamily: 'Roobert-SemiBold',
        color: (Colors.black),
    },
    nome1: {
        fontSize: 12,
        fontFamily: 'Roobert-Regular',
        color: '#a3a3a3'
    },

})