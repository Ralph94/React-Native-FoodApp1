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
import Beep2 from './assets/sounds/success2.mp3';
import Beep3 from './assets/sounds/taco-crunch.mp3';
import Beep4 from './assets/sounds/error-fizzle.mp3';




const Details = ({ route, navigation }) => {
    const { item } = route.params;

    const [isModalVisible, setModalVisible] = useState(false);
    const [price, setPrice] = useState(item.price);
    const [price2, setPrice2] = useState('$' + 5.99);
    const [state, setState] = useState(0);
    const [creditCard, setCreditCard] = useState('Credit Card Info');
    const [quantity, setQuantity] = useState(2);
    const [totalPrice, setTotalPrice] = useState(price * quantity);
    const [soundBeep, setSoundBeep] = useState(Beep);
    const [taco, setTaco] = useState(Taco);
    const [taco2, setTaco2] = useState(Taco2);

  const TacoImg = () => {
    if (item.id === '1') {
      <Image source={Taco} style={styles.taco} />
    } else {
      <Image source={Taco2} style={styles.taco} />
    }
  }

  const TacoImg2 = () => {
    <Image source={Taco2} style={styles.taco} />
  }

    // 1 sound!
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





     // 2nd sound!
    // our const sound is a new object of the Sound class that we imported from react-native-sound and we are passing in the path to the mp3 file
    const [sound2, setSound2] = useState(new Sound(Beep2, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ');

            
    }));
        
        // This is our function that plays the sound when the user presses the button on the checkout page and it is called in the render function below
    const playSound2 = () => {
        sound2.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            }
        })
    };





    // 3rd sound!
    // our const sound is a new object of the Sound class that we imported from react-native-sound and we are passing in the path to the mp3 file
    const [sound3, setSound3] = useState(new Sound(Beep3, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ');

            
    }));
        
        // This is our function that plays the sound when the user presses the button on the checkout page and it is called in the render function below
    const playSound3 = () => {
        sound3.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            }
        })
    };



    // 4th sound!
    // our const sound is a new object of the Sound class that we imported from react-native-sound and we are passing in the path to the mp3 file
    const [sound4, setSound4] = useState(new Sound(Beep4, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ');

            
    }));
        
        // This is our function that plays the sound when the user presses the button on the checkout page and it is called in the render function below
    const playSound4 = () => {
        sound4.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            }
        })
    }; 





    

    const PriceofItem = () => {
        if (state === 0) {
            return (
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{price}</Text>
                </View>
            )
        } else if (state === 1) {
            return (
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{price2}</Text>
                </View>
            )
        }
    }


                        


    
    const addToCart = () => {
        if (creditCard === 'Credit Card Info') {
            Alert.alert('Please enter your credit card information');
            playSound4();
        } else {
            Alert.alert('Your order has been placed');
            navigation.navigate('Checkout');
            playSound3();
            TacoImg();
            PriceofItem();
            
            
        }
    }

    const maintotalPrice = () => {
        setTotalPrice(price * quantity);
    }




    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    const addCreditCard = () => {
        setCreditCard();
    }
   
    const renderIngredientsItem = ({ item }) => {
    return (
      <View
            style={[styles.ingredientItemWrapper, {
                marginLeft: item.id === "1" ? 20 : 0,
            }
            ]}>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
    };
    
    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{item.title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Feather name="shopping-cart" size={30} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.imageWrapper}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.detailsWrapper}>
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.weight}>{item.weight}</Text>
                        <Text style={styles.rating}>{item.rating}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.sizeName}>{item.sizeName}</Text>
                        <Text style={styles.sizeNumber}>{item.sizeNumber}</Text>
                        <Text style={styles.tortilla}>{item.tortilla}{item.Bun}{item.crust}{item.sodaType}</Text>
                        <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.ingredients}>Ingredients</Text>
                        <FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />

                    </View>
                    {/* Add to cart button */}
                    <View style={styles.orderWrapper}>
                        <TouchableOpacity onPress={addToCart}>
                            <Text style={styles.orderText}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Add to cart button */}
                    <View style={styles.addToCart}>
                        <TouchableOpacity onPress={showModal}>
                            <Text style={styles.orderText}>Add credit card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationIn="slideInUp"
                animationOut="slideOutDown"
                isVisible={isModalVisible}
                style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Add Credit Card</Text>
                        <TouchableOpacity onPress={hideModal}>
                            <Feather name="x" size={30} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalBody}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Credit Card Number"
                            onChangeText={addCreditCard}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Credit Card Expiration"
                            onChangeText={addCreditCard}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Credit Card CVC"
                            onChangeText={addCreditCard}
                        />
                    </View>
            <View style={styles.Buttoncontainer}>
            <View style={styles.quantityText}>
                <View style={styles.quantityButton}>
                        <TouchableOpacity on Press={() => {
                        setState(state + 1);
                        if (item.id === '1') {
                            setPrice('$' + (state + 1) * 8.99);
                        } else {
                            (item.id === '2') 
                            setPrice('$' + (state + 1) * 5.99);
                        }
                         }}>
                        <AntDesign name="minuscircleo" size={40} color={colors.vantaBlack} />
                    </TouchableOpacity>
                </View>
                <View style={styles.quantityText}>
                    <Text style={styles.quantityText}>{state}</Text>
                </View>
                <View style={styles.quantityButton}>
                                <TouchableOpacity onPress={() => {
                        setState(state + 1);
                                if (item.id === '1') {
                                    setPrice('$' + (state + 1) * 8.99);

                                } else if (item.id === '2') {
                                    setPrice('$' + (state + 1) * 5.99);


                                } else if (item.id === '3') {
                                    setPrice('$' + (state + 1) * 3.99);


                                } else {
                                    (item.id === '4')
                                    setPrice('$' + (state + 1) * 9.99);
                                }
                                }}>    

                        <AntDesign name="pluscircleo" size={40} color={colors.vantaBlack} />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={styles.priceSign}>
                <Text style={styles.priceText}>
                    {price}
                </Text>
            </View>        
                <View style={styles.modalFooter}>
                 <Pressable onPress={hideModal} onPressIn={() => {playSound();}}>
                    <Text style={styles.modalFooterText}>Cancel</Text>
                 </Pressable>
                <Pressable  onPress={hideModal} onPressIn={() => {playSound2();}}>
                     <Text style={styles.modalFooterText}>Add</Text>
                </Pressable >
                </View>
            </View>
            </Modal>
        </SafeAreaView>
    );
};
                
                
    

           


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
    },

    body: {
        flex: 1,
        paddingHorizontal: 20,
    },

    imageWrapper: {
        width: '100%',
        height: 300,
        marginBottom: -180,
    },

    image: {
        width: '100%',
        height: '50%',
    },

    detailsWrapper: {
        width: '100%',
        
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    details: {
        width: '100%',
        
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },

    weight: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    rating: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    price: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: 'bold',
        marginBottom: 10,
        


    },

    priceSign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 70,
        marginVertical: 5,

    },

    sizeName: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    sizeNumber: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    tortilla: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    deliveryTime: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    description: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    ingredients: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 10,
    },

    addToCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    addToCartText: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: 'bold',
    },

    
    modalContent: {
        width: '80%',
        height: '50%',
        marginTop: '50%',
        marginBottom: '10%',
        marginLeft: '50%',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 20,
        
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },

    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.vantaBlack,
        marginBottom: 10,


    },

    modalInput: {
        width: '100%',
        height: 40,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

     orderWrapper: {
        marginHorizontal: 20,
        backgroundColor: colors.yellow,
        borderRadius: 60,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.vantaBlack,
        textAlign: 'center',

    },
    

    modal: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,

    },

    modalTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: colors.vantaBlack,
        borderColor: 'gold',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    modalText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.vantaBlack,
        marginBottom: 20,
    },

    priceText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.priceTag,
    },

    Buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 80,
        paddingVertical: -10,
    },

    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    modalFooterText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 25.5,
        color: 'gold',
        fontWeight: 'bold',
        borderRadius: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
        marginLeft: 10,
        justifyContent: 'space-between',

    },

  
    modalFooterButton: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.vantaBlack,
        backgroundColor: colors.yellow,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
    },
        
    
    quantityButton: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.vantaBlack,
        backgroundColor: colors.white,
        borderRadius: 10,
        
    },


    quantityText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.priceTag,


        
    },

    buttonText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.vantaBlack,
       

    },

    PurchaseText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: 'thistle',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
    },

    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'gold',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',


    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    priceText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.priceTag,
        marginBottom: 10,
    },
    





   







});

    

    

    

export default Details;
