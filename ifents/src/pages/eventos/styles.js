import { StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        backgroundColor: (Colors.white),
    },
    header: {
        backgroundColor: (Colors.white),
        alignItems: 'flex-end',
        paddingTop: 25,
        paddingRight: 15
    },
    evento: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        borderWidth: 0.5,
        borderColor: (Colors.icon),
        borderRadius: 5,
    },
    div: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    div1: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    banner: {
        resizeMode: 'cover',
        width: '100%',
        marginTop: 5,
        borderRadius: 5,
        marginBottom: 10,
    },
    titulo: {
        fontFamily: 'Roobert-Medium',
        fontSize: 20,
        color: (Colors.black),
    },
    info: {
        fontFamily: 'Roobert-Regular',
        fontSize: 13,
        color: '#a3a3a3',
        marginTop: 5
    },
    botaoEdit: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '49%',
        backgroundColor: '#FFC817',
        flexDirection: 'row'
    },
    botaoDel: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '49%',
        backgroundColor: '#FF4A5F',
        flexDirection: 'row'
    },
    botao: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%',
        backgroundColor: (Colors.main1),
        flexDirection: 'row',
    },
    icon: {
        padding: 5,
        color: (Colors.white),
    },
    likes: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%'
    },
    likeText: {
        fontFamily: 'Roobert-Regular',
        fontSize: 15,
        marginLeft: 5,
        color: '#304FFE',
    },
    buttons: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textoBo: {
        fontSize: 12,
        color: (Colors.white),
        fontFamily: 'Roobert-SemiBold'
    },
})