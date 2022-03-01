import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from 'my_first_app/assets/colors/colors.js';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function FlatButton3({ navigation }) {
  return (
    <TouchableOpacity style={styles.buttonCheckout} onPress={() => navigation.navigate('checkout')}>
      <Text style={styles.buttonText}>Confirm Order <AntDesign name="checkcircle" size={30} color={colors.lightGreen} style={styles.close} /></Text>
    </TouchableOpacity>
 
  );
}
  
 

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: -100,
    left: 20,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',

  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.vantaBlack,
    textAlign: 'center',
    borderRadius: 10,

  }
});