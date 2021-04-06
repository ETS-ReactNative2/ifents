import { StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: (Colors.white),
        paddingBottom: 100,
    },
    background: {
        //padding: 80,
        width: '100%',
    },
    banner: {
        resizeMode: 'cover',
        width: '100%',
        height: 180
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    titulo: {
        color: '#121212',
        fontFamily: 'Roobert-Bold',
        fontSize: 30,
        marginLeft: 10
    },
    content: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        padding: 20
    },
    text: {
        marginTop: 20,
        marginBottom: 10,
        color: '#A3A3A3',
        alignSelf: 'flex-start',
        fontSize: 13,
        fontFamily: 'Roobert-Medium'
    },
})
