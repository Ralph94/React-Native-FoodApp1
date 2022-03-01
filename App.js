import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './components/navigation/Navigator.js';
import { MenuProvider } from 'react-native-popup-menu';







export default function App() {
  return (
    <MenuProvider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </MenuProvider>
  );
}

