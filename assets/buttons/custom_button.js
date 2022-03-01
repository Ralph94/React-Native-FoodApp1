import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function FlatButton2({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Decrease</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: -100,
    left: 90,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#00FFFF',
    width: '50%',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#000100',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});