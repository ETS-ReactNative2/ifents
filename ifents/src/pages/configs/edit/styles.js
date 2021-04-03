import { StyleSheet } from 'react-native'

import Colors from '../../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: (Colors.white),
        flexDirection: 'column',
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
    inputbox: {
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
    },
    buttonsbox: {
        alignItems: 'center',
        padding: 15
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
    }
})
