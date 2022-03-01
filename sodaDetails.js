import React, { useState } from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, FlatList,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TacoTruck from './tti.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from './assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';



const sodaDetails = ({ route, navigation }) => {
    const { item } = route.params;
   
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
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.vantaBlack} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <AntDesign
                            name="star"
                            size={12}
                            color={colors.cripsyWhite}
                        />
                    </View>
                </View>
            </SafeAreaView>

            {/* Title of soda */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price of soda */}
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>${item.price}</Text>
            </View>

            {/* soda info */} 
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Type</Text>
            <Text style={styles.infoItemText}>{item.sodaType}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
                </View>
                </View>
    
            {/* Ingredients of the soda */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            
            {/* Place an order */}
            <TouchableOpacity onPress={() => alert("Your order has been placed!!")}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Add To Cart</Text>
                    <Feather name="chevron-right" size={18} color={colors.vantaBlack} />
                </View>
            </TouchableOpacity>
    
        </View>
    );
};

 export default sodaDetails; // Don't forget to use export default! otherwise you won't be able to import it elsewhere
    

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        borderRadius: 10,
    },

    headerRight: {
        backgroundColor: colors.yellow,
        borderWidth: 2,
        borderColor: colors.textLight,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,


    },

    titleWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 20,

    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.vantaBlack,
        fontFamily: 'Montserrat-Bold',
        width: '50%',
    },

    priceWrapper: {
        paddingHorizontal: 20,
        marginTop: 20,
        paddingVertical: 20,

    },

    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.priceTag,
        fontFamily: 'Montserrat-Bold',
    },

    infoWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoLeftWrapper: {
        paddingLeft: 20,
    },

    infoItemWrapper: {
        paddingLeft: 1.2,
    },

    infoItemTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: colors.textLight,
    },

    infoItemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.vantaBlack,
    },

    itemImage: {
        resizeMode: 'contain',
        marginLeft: 10,
        borderRadius: 10,

    },

    ingredientsWrapper: {
        marginTop: 40,
    },

    ingredientsTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.vantaBlack,
        marginLeft: 20,
    },

    ingredientsListWrapper: {
        paddingVertical: 20,
    },


    ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
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
    },
  






            
});
            



            

            






  
 

   

    

  
   


