import { StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

export default StyleSheet.create({
<<<<<<< HEAD
    content: {
        flex: 1,
        padding: 15,
        backgroundColor: (Colors.white),
    },
=======
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
<<<<<<< HEAD
        padding: 0,
=======
        padding: 15,
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
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
<<<<<<< HEAD
        height: 156,
=======
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
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
<<<<<<< HEAD
        fontSize: 12,
=======
        fontSize: 13,
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
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
<<<<<<< HEAD
    botaoHidden: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '49%',
        backgroundColor: '#FFF',
        flexDirection: 'row'
    },
=======
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
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