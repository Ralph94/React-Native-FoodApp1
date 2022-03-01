import React, { useState } from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, Linking, Animated, Easing
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TacoTruck from './tti.png';
import hello from './assets/images/helloImg.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import Sound from 'react-native-sound';
import soundBeep from './assets/sounds/success1.mp3';





const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
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

  let rotateValueHolder = new Animated.Value(0)
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0)
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction())
    
  }

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const alertMessage = () => {
    alert(
      'Tacos Life',
      'Welcome to the Taco Truck!',

    )
  }


  function handleLogin() {
    
    console.log(username)
    console.log(password)
  }
  console.log("Log In Page");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={TacoTruck} style={styles.logo} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username Or Email <AntDesign name='user' size={19} color={colors.vantaBlack}  /></Text>

        <TextInput style={styles.textInput} 
          placeholder="Username Or Email"
          autoCapitalize="none"
          onChangeText={(val) => setUsername(val)}           
        />
        <Text style={styles.text_footer}>Password<AntDesign name="lock" size={20} color={colors.vantaBlack} /></Text>
        <TextInput style={styles.textInput}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.action}>
          <Button title="Login" style={styles.buttonContainer} onPress={() => {
            navigation.navigate('Menu')
            playSound();
          }}>
          </Button>
          <Button title="Sign Up" style={styles.buttonContainer2} onPress={() => navigation.navigate('Sign')}></Button>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.alertContainer}
            onPressIn={() => alertMessage ()}
            onPress={startImageRotateFunction}>
          <Animated.Image
              style={[
                styles.smileyFace,
                {transform: [{rotate: RotateData}]}
              ]}
              source={hello}>
          </Animated.Image>
          </TouchableOpacity>
        </View>
        
        <View style={styles.action3}>
        <Text style={styles.text}>Please Login or Sign Up to continue</Text>
      </View>
      </View>
    </View>
  );
}

export default LoginPage; // Don't forget to use export default! otherwise you won't be able to import it elsewhere


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bigRed, // this is the background color of the entire screen
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000', // this is the color of the background of the header
  },
  footer: {
    flex: 3,
    backgroundColor: '#f6f3e4', // this is the color of the footer the background of the login page the color is crisp white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text_footer: {
    color: colors.vantaBlack,
    fontSize: 18,
    fontWeight: 'bold',
  },

  logo: {
    width: 100,
    height: 100,
  },
  action: {
    flexDirection: 'row', // this is the direction of the button
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'space-around'
  },
  
  action3: {
    flexDirection: 'row', // this is the direction of the button
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    
  },
  text: {
    color: colors.vantaBlack,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  sideText: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 150,
    fontSize: 25,
    color: '#4f603c',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    width: 150,
    height: 40,
    backgroundColor: '#4f603c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer2: {
    width: 150,
    height: 40,
    backgroundColor: '#4f603c',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10,
    borderRadius: 30,
  },

  smileyFace: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,

  },

  alertContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

});
    

  
   


