import React, { useState } from 'react';
import {
  StyleSheet, TouchableHighlight, Dimensions, Text,
  View, TouchableOpacity, SafeAreaView, Image,
  Button, TouchableWithoutFeedback, ScrollView, TextInput, FlatList , Pressable
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TacoTruck from './tti.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import categoriesData from "./assets/data/categoriesData";
import popularData from "./assets/data/popularData";
import pizzaSection from "./assets/data/pizzaSection";
import sodaSection from "./assets/data/sodaSection";
import Feather from 'react-native-vector-icons/Feather';
import colors from './assets/colors/colors';
import SearchDropDown from "./assets/data/searchData";
const { item } = route.params;

    // multiply the price once its pressed
    const multiplyPrice = () => {
        if (state === 0) {
            setPrice(price * 2);
            setState(1);
        } else {
            setPrice(price / 2);
            setState(0);
        }
    }

    const multiplyPrice2 = () => {
        if (state === 0) {
            setPrice2(price2 * 2);
            setState(1);
        } else {
            setPrice2(price2 / 2);
            setState(0);
        }

    }

// if $8,99 choose Tacos De Asda and if $5.99 choose Shrimp Tacos
const PriceItems = ({ navigation }) => {
    const [price, setPrice] = useState(8.99);
    const [state, setState] = useState(0);
    const [price2, setPrice2] = useState(5.99);
    const [state2, setState2] = useState(0);
    const [search, setSearch] = useState('');
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={30} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Price</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Feather name="search" size={30} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={colors.primary}
                    onChangeText={text => setSearch(text)}  
                    value={search}
                />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.popular}>
                    <Text style={styles.popularText}>Popular</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={popularData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Item', { item })}>
                                <View style={styles.popularItem}>
                                    <Image source={item.image} style={styles.popularImage} />
                                    <Text style={styles.popularTitle}>{item.title}</Text>
                                    <Text style={styles.popularWeight}>{item.weight}</Text>
                                    <Text style={styles.popularRating}>{item.rating}</Text>
                                    <Text style={styles.popularPrice}>${item.price}</Text>
                                    <View style={styles.popularSize}>
                                        <Text style={styles.popularSizeName}>{item.sizeName}</Text>
                                        <Text style={styles.popularSizeNumber}>{item.sizeNumber}</Text>
                                    </View>
                                    <View style={styles.popularTortilla}>
                                        <Text style={styles.popularTortillaName}>{item.tortillaName}</Text>
                                        <Text style={styles.popularTortillaNumber}>{item.tortillaNumber}</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </View>
                <View style={styles.categories}>
                    <Text style={styles.categoriesText}>Categories</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categoriesData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Item', { item })}>
                                <View style={styles.categoriesItem}>
                                    <Image source={item.image} style={styles.categoriesImage} />
                                    <Text style={styles.categoriesTitle}>{item.title}</Text>
                                    <Text style={styles.categoriesPrice}>${item.price}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </View>
                <View style={styles.pizza}>
                    <Text style={styles.pizzaText}>Pizza</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={pizzaSection}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Item', { item })}>
                                <View style={styles.pizzaItem}>
                                    <Image source={item.image} style={styles.pizzaImage} />
                                    <Text style={styles.pizzaTitle}>{item.title}</Text>
                                    <Text style={styles.pizzaPrice}>${item.price}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

});



