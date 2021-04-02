import { StyleSheet } from 'react-native'

import Colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: (Colors.white),
    },
    button1: {
        marginTop: 30,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: (Colors.main1)
    },
    text: {
        marginTop: 20,
        marginBottom: 10,
        color: '#A3A3A3',
        alignSelf: 'flex-start',
        fontSize: 14,
        fontFamily: 'Roobert-Medium'
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
        fontFamily: 'Roobert-SemiBold'
    },
    input: {
        width: '100%',
        backgroundColor: (Colors.white),
        height: 50,
        borderWidth: 1,
        borderColor: (Colors.icon),
        borderRadius: 5,
        padding: 15,
        fontFamily: 'Roobert-Regular',
        fontSize: 12,
    },
})
