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
// navigation.goBack();ta

const categorySodas = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate('categoryCheeseburger'); 
        }}>
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected3 ? colors.yellow : colors.cripsyWhite,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
          <Image source={item.image} style={styles.categoryItemImage} ></Image>
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: colors.bigRed,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.vantaBlack : colors.cripsyWhite}
          />
        </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [ dataSource ] = useState([{'name': 'tacos', 'navigation': 'Menu'}, {'name': 'pizzas', 'navigation': 'categoryPizzas'}, {'name': 'soda', 'navigation': 'categorySodas'}, {'name': 'cheesburgers', 'navigation': 'categoryCheeseburger'}]); // this is the data source for the categories
  const [filtered, setFiltered] = useState(dataSource) // our filtered data source for the categories on the menu page that we will use to filter the categories
  const [searching, setSearching] = useState(false) // this is the state for the search bar that we will use to show and hide the search bar
  const onSearch = (text) => {

   if (text) {
      setSearching(true)
      const userText = text.toLowerCase() // this is the text that the user is searching for and we are converting it to lower case

      const userTextList = dataSource.filter(food => { // this is the list of items that the user is searching for and we are filtering it
        if (food.name)
          return food
      })
      setFiltered(userTextList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
 

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
              <Image source={require('./assets/images/profile.png')} style={styles.profileImage}
                    />
            <Feather name="menu" size={24} color={colors.vantaBlack} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.vantaBlack} />
          
          <View style={styles.search}>
            <TextInput
              style={styles.searchText}
              placeholder="Search"
              autoCapitalize="none"
              onChangeText={onSearch}
            />
            
          
          
        
          
           {
              searching &&
              <SearchDropDown
                dataSource={filtered} navigation={navigation} />
            }
            
            </View>
            
          </View>

        {/* CategorieData */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories Soda</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              keyExtractor={(food) => food.id}
              horizontal={true}
            />
          </View>
        </View>
        {/* popularData */} 
        <View style={styles.popularWrapper}> 
          <Text style={styles.popularTitle}>Popular</Text>
          {sodaSection.map((item) => (  //map function to render popularData from popularData.js file 
            <TouchableOpacity
              key={item.id} // key is required for FlatList to work properly 
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20, // first item margin top is 10 else 20 
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <Text style={styles.popularTopText}>top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Delivery time {item.deliveryTime}       
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.vantaBlack} />
                      </View>       
                      <View style={styles.ratingWrapper}>

                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
              <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default categorySodas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.vantaBlack,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.vantaBlack,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.vantaBlack,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.vantaBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: colors.vantaBlack,
    
  },

 


  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.cripsyWhite,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.vantaBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
   popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18.5,
    fontWeight: 'bold',
    color: colors.vantaBlack,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.vantaBlack,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.vantaBlack,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});