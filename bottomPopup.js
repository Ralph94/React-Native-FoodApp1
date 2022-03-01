
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, FlatList, ImageBackground, Modal, Alert, Linking, Animated, Easing
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import bg from './assets/images/cart.png';
import Taco from './assets/images/taco1.png';
import Pizza from './assets/images/pizza1.png';
import { State } from 'react-native-gesture-handler';
import FlatButton3 from 'my_first_app/assets/buttons/custom.button3.js';
import { FAB } from 'react-native-paper';
import Sound from 'react-native-sound';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// create quantity page with food image // 
const bottomPopup = ({ route, navigation }) => {
    const [music, setMusic] = useState(null);
    const [price, setPrice] = useState('$' + 8.95);
    const [price2, setPrice2] = useState('$' + 5.99);
    const [state, setState] = useState(0);
    const [creditCard, setCreditCard] = useState('Credit Card Info');


    return (
        <View style={styles.container}>
            <Image source={Pizza} style={styles.tacoImg} />
            <View style={styles.quantity}>
                <View style={styles.quantityButton}>
                    <TouchableOpacity on Press={() => {
                        if (state > 0) {
                            setState(state - 1);
                            setPrice2('$' + (state - 1) * 5.99);
                        }
                    }}>
                        <AntDesign name="minuscircleo" size={30} color={colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={styles.quantityText}>
                    <Text style={styles.quantityText}>{state}</Text>
                </View>
                <View style={styles.quantityButton}>
                    <TouchableOpacity onPress={() => {
                        setState(state + 1);
                        setPrice2('$' + (state + 1) * 5.99);
                    }}>
                        <AntDesign name="pluscircleo" size={30} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>{price}</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Order', {
                        state: state,   
                        price: price,
                    });
                }}>
                    <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}




  
export default bottomPopup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.vantaBlack,
        marginTop: 20,
        marginBottom: 20,
    },

    quantity: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        marginBottom: 20,
    },

    quantityButton: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    quantityText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.vantaBlack,
        textAlign: 'center',
    },

    headerLeft: {
        width: '10%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },



    headerCenterText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.vantaBlack,
    },


});







