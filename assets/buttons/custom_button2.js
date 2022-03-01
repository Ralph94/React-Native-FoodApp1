import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Increase</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: -10,
    left: 90,
    right: 0,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FF0000',
    width: '50%',
   

  },
  buttonText: {
    color: '#000100',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});