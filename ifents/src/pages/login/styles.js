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
    logobox: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputbox: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsbox: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 15,
    },
    logo: {
        width: 55,
        height: 74,
        marginBottom: 20,
        resizeMode: "contain"
    },
    lame: {
        width: '100%',
        backgroundColor: (Colors.white),
        height: 50,
        borderWidth: 2,
        borderColor: (Colors.main1),
        borderRadius: 5,
        padding: 15,
        fontFamily: 'Roobert-Regular',
        fontSize: 12,

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
    button1: {
        marginTop: 30,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: (Colors.main1)
    },
    button2: {
        marginTop: 15,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#ebebeb'
    },
    text: {
        marginTop: 10,
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
    buttonText1: {
        fontSize: 13,
        color: '#A3A3A3',
        fontFamily: 'Roobert-SemiBold'
    },
})