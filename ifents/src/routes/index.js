import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native'

import RotasAutenticaco from './rotasAutenticacao'
import RotasApp from './rotasApp'
import ContextoAuth from '../provider/provedorAuth'
import Colors from '../utils/colors'

export default function Rotas() {
    const { logado, loading } = useContext(ContextoAuth)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: (Colors.white) }}>
                <ActivityIndicator size="large" color={Colors.main1} />
            </View>
        )
    }

    return logado ? <RotasApp /> : <RotasAutenticaco />
}