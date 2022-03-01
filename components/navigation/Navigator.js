
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { View } from 'react-native';

import LoginPage from '../../login.js';
import MainPage from '../../main.js';
import SignPage from '../../sign.js';
import MenuPage from '../../menu.js';
import Details from '../../Details.js';
import sodaDetails from '../../sodaDetails.js';
import categoryPizzas from '../../categoryPizzas.js';
import categorySodas from '../../categorySodas.js';
import categoryCheeseburger from '../../categoryCheeseburger.js';
import bottomPopup from '../../bottomPopup.js';
import Checkout from '../../checkout.js';


const Stack = createStackNavigator();

export default function Navigator(props) {

  return(
      <Stack.Navigator initialRouteName="Main">
            <>
            <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false, animationEnabled: false}} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="Sign" component={SignPage} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="Menu" component={MenuPage} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="categoryPizzas" component={categoryPizzas} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="categorySodas" component={categorySodas} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="sodaDetails" component={sodaDetails} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="categoryCheeseburger" component={categoryCheeseburger} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="bottomPopup" component={bottomPopup} options={{ headerShown: false, animationEnabled: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false, animationEnabled: false }} />
        
  
        
            </>
          </Stack.Navigator>
    );

}