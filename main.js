import React, { useState } from 'react'; // useState is a hook that allows you to create a state variable in a functional component.
import { StyleSheet, TouchableHighlight, Dimensions, Text, View, TouchableOpacity, SafeAreaView, Image, Button, TouchableWithoutFeedback, Pressable} from 'react-native';
import TacoTruck from './tti.png';
import colors from './assets/colors/colors';
import Sound from 'react-native-sound';
import IntroBeep from './assets/sounds/introsong2.mp3';


export default function MainPage({ navigation, route, props }) {
  console.log("App Is Running At 100%");

  // our const sound is a new object of the Sound class that we imported from react-native-sound and we are passing in the path to the mp3 file
    const [sound, setSound] = useState(new Sound(IntroBeep, Sound.MAIN_BUNDLE, (error) => {
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
   
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Taqueria El Gavilan</Text>
       
      <Image
        blurRadius={0}
        fadeDuration={6000}
        source={
          
        TacoTruck
      }
        />
      
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}  onPressIn={() => playSound()}>
        <Text style={styles.text} >Tu Aventuras De Tacos De Espera!</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',

  },
  h1: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    margin: 0,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    borderWidth: 0,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: colors.vantaBlack,
    textDecorationStyle: 'solid',

  },
  buttonContainer: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: colors.vantaBlack,
    textAlign: 'center',
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textDecorationStyle: 'solid',
    textShadowColor: colors.vantaBlack,

    
  },
});
