import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';

export default function SearchDropDown( props ) {
    const { dataSource  } = props

    
    return (
        
            <View style={styles.subContainer}>
               
                {
                    dataSource.length ? // if dataSource is not empty then show the dataSource
                        
                    dataSource.map((food, idx) => {
                        console.log(food)
                        console.log(food.navigation)
                            return (
                                <View style={styles.itemView} key={idx}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate( food.navigation )}>
                                    <Text style={styles.itemText}>
                                            {food.name}

                                        </Text>
                                </TouchableOpacity>
                            </View>
                                
  
                            )
                        })
               

                        : //this means there is no data to display on the dropdown
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No search items matched</Text>
                        </View>
                }
                
                </View>
                

    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        left: 0, right: 0, bottom: 0,

    },
    subContainer: {
        position: 'relative',
        top: 0,
        left: 0, right: 0, bottom: -50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: '100%',
        

    },
    itemView: {
        backgroundColor: 'grey',
        height: 30,
        minWidth: '30%',
        textAlign: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000100',
        shadowColor: '#000',
        fontWeight: 'bold',
        fontSize: 65,
    },
    itemText: {
        color: 'gold',
        paddingHorizontal: 10,
        fontSize: 21,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        width: '100%',
        borderRadius: 10,
        borderColor: '#000100',
    },
    noResultView: {
        alignSelf: 'center',

        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        color: '#000100',
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});  // end of styles
