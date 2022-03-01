import React, { useState } from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, FlatList, Alert, Pressable,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TacoTruck from './tti.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import Pizza from './assets/images/pizza1.png';
import Taco from './assets/images/taco1.png';
import Taco2 from './assets/images/taco2.png';
import Sound from 'react-native-sound';
import Beep from './assets/sounds/downBeep.mp3';
import Info from './assets/data/popularData.js';
import MapView from 'react-native-maps';




const Checkout = ({ route, navigation }) => {
  const [pageData, setPageData] = useState(Info);
  const [price, setPrice] = useState(Info.price);
  const [price2, setPrice2] = useState('$' + 5.99);
  const [state, setState] = useState(0);
  const [taco, setTaco] = useState(Taco);
  const [taco2, setTaco2] = useState(Taco2);

  const TacoImg = () => {
    if (Info.id === '1') {
      <Image source={Taco} style={styles.taco} />
    } else {
      <Image source={Taco2} style={styles.taco} />
    }
  }

  const TacoImg2 = () => {
    <Image source={Taco2} style={styles.taco} />
  }

  
        
    

    const [soundBeep, setSoundBeep] = useState(Beep);


    // our const sound is a new object of the Sound class that we imported from react-native-sound and we are passing in the path to the mp3 file
    const [sound, setSound] = useState(new Sound(soundBeep, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ');

            
    }));

     // This is our function that plays the sound when the user presses the button on the checkout page and it is called in the render function below
    const playSound = () => {
        sound.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            }
        })
  }; 
  
  return (
    <View style={styles.container}>
    <View style={styles.mapStyleContainer}>
    <MapView style={styles.mapStyle}
  
    initialRegion={{
      latitude: 39.529633,
      longitude: -119.813805,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
      >
        <MapView.Marker coordinate={{
          latitude: 39.529633,
          longitude: -119.813805
        }}
          pinColor='#FF0000'
        >
        <MapView.Callout>
            <Text>I'm here</Text>
        </MapView.Callout>
        </MapView.Marker>
          <MapView.Circle
            center={{
              latitude: 39.529633,
              longitude: -119.813805
            }}
            radius={600}
            strokeWidth={1}
            strokeColor="rgba(0,0,0,0.5)"
            fillColor="#00FFFF"
            borderColor="black"

          />
      </MapView>
      </View>
      <View style={styles.container}>
      <FlatList
        data={pageData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemImage}>
              <Image source={item.logo} style={styles.logo} />
            </View>
          </View>
        )}
      />
      <View style={styles.itemText}>
       <Text style={styles.text}>Order is on your way! </Text>
       <Text style={styles.text2}>Your food will be there shortly. Courier will notify when they are outside. <AntDesign name="checkcircle" size={25} color={colors.lightGreen} />
       </Text>
  </View>
      </View>
      </View>
  );
};


                        


    

                
    

           


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

  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
    padding: 10,
  },

  itemImage: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
    padding: 10,

  },

  logo: {
    width: 50,
    height: 50,

  },



  itemPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.vantaBlack,
    textAlign: 'center',
    justifyContent: 'center',

  },

  mapStyleContainer: {
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

  itemText: {
    marginTop: -100,
    marginLeft: -15,
    marginBottom: -25,
    marginRight: -15,
    alignItems: 'center',
    justifyContent: 'center',

  },


  


  text: {
    fontSize: 20.6,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    borderColor: "#00FFFF",
    borderWidth: 2,
    borderRadius: 10,
  },

  text2: {
    fontSize: 15.6,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    borderColor: "#00FFFF",
    borderWidth: 3.5,
    borderRadius: 10,
    width: '80%',
  },

 



  
  





   







});

    

    

    

export default Checkout;
