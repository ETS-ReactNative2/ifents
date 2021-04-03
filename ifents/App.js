import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native'
import { ProvedorAuth } from './src/provider/provedorAuth'
import { NavigationContainer } from '@react-navigation/native';

import Rotas from './src/routes'

export default function App() {

  let [fontsLoaded] = useFonts({
    'Roobert-Bold': require('./assets/fonts/Roobert-Bold.otf'),
    'Roobert-BoldItalic': require('./assets/fonts/Roobert-BoldItalic.otf'),
    'Roobert-Heavy': require('./assets/fonts/Roobert-Heavy.otf'),
    'Roobert-HeavyItalic': require('./assets/fonts/Roobert-HeavyItalic.otf'),
    'Roobert-Light': require('./assets/fonts/Roobert-Light.otf'),
    'Roobert-Medium': require('./assets/fonts/Roobert-Medium.otf'),
    'Roobert-MediumItalic': require('./assets/fonts/Roobert-MediumItalic.otf'),
    'Roobert-Regular': require('./assets/fonts/Roobert-Regular.otf'),
    'Roobert-RegularItalic': require('./assets/fonts/Roobert-RegularItalic.otf'),
    'Roobert-SemiBold': require('./assets/fonts/Roobert-SemiBold.otf'),
    'Roobert-SemiBoldItalic': require('./assets/fonts/Roobert-SemiBoldItalic.otf'),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <ProvedorAuth>
          <StatusBar barStyle="dark-content" animated />
          <Rotas />
        </ProvedorAuth>
      </NavigationContainer>
    );
  }
}

