import { StyleSheet } from 'react-native'

import Colors from '../../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: (Colors.white),
        paddingBottom: 100
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 50,
        padding: 5,
    },
    titulo: {
        color: '#000',
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
        fontSize: 14,
        fontFamily: 'Roobert-Medium'
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
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: (Colors.main1)
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
        fontFamily: 'Roobert-SemiBold'
    },
    dropdown: {
        backgroundColor: (Colors.white),
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: (Colors.icon),
        borderRadius: 5,
    },
    date: {
        flexDirection: 'row',
        backgroundColor: (Colors.white),

    },
    dateInput: {
        width: '78%',
        backgroundColor: (Colors.white),
        height: 50,
        borderWidth: 1,
        borderColor: (Colors.icon),
        borderRadius: 5,
        padding: 15,
        fontFamily: 'Roobert-Regular',
        fontSize: 12,
    },
    hourInput: {
        width: '20%',
        backgroundColor: (Colors.white),
        height: 50,
        marginLeft: '2%',
        borderWidth: 1,
        borderColor: (Colors.icon),
        borderRadius: 5,
        padding: 15,
        fontFamily: 'Roobert-Regular',
        fontSize: 12,
        textAlign: 'center'
    }
})
