import { useRef, useState} from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, Animated, Linking,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TacoTruckBG from './tacobg.png';
import TacoTruck from './tti.png';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import emailjs from 'emailjs-com';


const { width, height } = Dimensions.get('window');

const SignPage = ({ navigation }) => {

  const [result, showResults] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_22w29rt', e.target, 'user_LiXgplm1mPROridyDphPE')
      .then((result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        }
      );
    e.target.reset();
    showResults(true);
  };  


  const buttonAnimation = useRef(new Animated.Value(0)).current;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const animateButton = () => {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 1550,
      useNativeDriver: true,
    }).start(() => navigation.navigate('Menu')) 
  }


  const buttonAnimationOpacity = {
    opacity: buttonAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    }),
};
  


    


  

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={TacoTruck} style={styles.logo} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username<AntDesign name="user" size={20} color={colors.cripsyWhite} style={styles.cartIcon} /></Text>
        <TextInput
          name="username"
          style={styles.textInput}
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={(val) => setUsername(val)}
        />
        <Text style={styles.text_footer}>Password<AntDesign name="lock" size={20} color={colors.cripsyWhite} style={styles.cartIcon} /></Text><AntDesign name="lock" size={20} color={colors.cripsyWhite} />
        <TextInput
          name="password"
          style={styles.textInput}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Text style={styles.text_footer}>Confirm Password<AntDesign name="lock" size={20} color={colors.cripsyWhite} style={styles.cartIcon} /></Text>
        <TextInput
          name="confirmpassword"
          style={styles.textInput}
          placeholder="Confirm Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
        />
        
        <View style={styles.action} onPress={() => alert("Please Confirm Account Inside Your Email!")} >
          <TouchableOpacity onPress={animateButton} onPressIn={() => alert("Please Confirm Account Inside Your Email!")} onSubmit={sendEmail}>
            <Animated.View style={[styles.box, buttonAnimationOpacity]}><AntDesign name="smileo" size={30} color={colors.cripsyWhite} style={styles.smileIcon} /><Text style={styles.text}>Confirm Account</Text></Animated.View>
        </TouchableOpacity>
        </View>
        <Text style={styles.text_footer1} onPress={() => navigation.navigate('Login')}>Already have an account?</Text>
      </View>
    </View>
  );
}

export default SignPage;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bigRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: colors.bigBlue,
    padding: 7,
    borderRadius: 10,
    width: width - 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 60,
    marginBottom: -20,


  },
  header: {
    flex: 1,
    backgroundColor: colors.bigRed,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: width * 0.5,
    height: height * 0.5,
    resizeMode: 'contain',
    
  },
  cartIcon: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: colors.vantaBlack,

  },

  text_footer: {
    color: colors.vantaBlack,
    fontSize: 20,
    fontWeight: 'bold',
  },

  smileIcon: {
    height: 30,
    width: 30,
    margin: 0,
    padding: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: colors.bigRed,
    shadowRadius: 10,
    shadowColor: colors.vantaBlack,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    
  },
 
  text_footer1: {
    color: colors.vantaBlack,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    
  },

  footer: {
    flex: 1.9,
    backgroundColor: colors.cripsyWhite, // this is the color of the footer the background of the login page the color is crisp white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  

    
  },
  
  textInput: {
    width: width / 1.5,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'brown',
    fontSize: 18,
    color: '#d6d7da',
    fontWeight: 'bold',
    color: colors.vantaBlack,

  },
  text: {
    color: '#000100',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    backfaceVisibility: 'visible',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: width / 1.5,
    height: 45,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,

  },

  


  

});














  