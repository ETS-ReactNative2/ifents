import { StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: (Colors.white)
    },
    header: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 15,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderColor: (Colors.icon)
    },
    headertext: {
        marginLeft: 25,
        fontFamily: 'Roobert-SemiBold',
        color: (Colors.black),
        fontSize: 18
    },
    botao: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 25,
    },
    titulo: {
        fontFamily: 'Roobert-SemiBold',
        fontSize: 16,
        color: (Colors.black)
    },
    legenda: {
        fontFamily: 'Roobert-Medium',
        fontSize: 12,
        color: '#a3a3a3',
    },
    logout: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sair: {
        height: '40%',
        width: '95%',
        justifyContent: 'center',
        borderWidth: 0.45,
        borderColor: '#a3a3a3'
    },
    logouttext: {
        textAlign: 'center',
        fontFamily: 'Roobert-Medium'
    }
})
