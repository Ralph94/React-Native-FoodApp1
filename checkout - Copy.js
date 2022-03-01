import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, FlatList, ImageBackground
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import bg from './assets/images/co.png';
import Taco from './assets/images/taco1.png';
import { State } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
import Sound from 'react-native-sound';
import MapView from 'react-native-maps';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';


const Checkout = ({ route, navigation }) => { //route is the object that is passed in from the previous page
  

  return ( // this is the page that is displayed when the user orders a food items from the menu page 
    
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
  
    initialRegion={{
      latitude: 39.529633,
      longitude: -119.813805,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
      >

      </MapView>
      <Text style={styles.text}>Order is on your way!</Text>
      <Text style={styles.text2}>Your food will be delivered in 30 minutes our courier will notify when they are outside <AntDesign name="checkcircle" size={25} color={colors.lightGreen} /></Text>
      </View>
  );
};


    




 export default Checkout; // Don't forget to use export default! otherwise you won't be able to import it elsewhere
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
  },

  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },

  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },




    






 






            
});
            



            

            






  
 

   

    

  
   


