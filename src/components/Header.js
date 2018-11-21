// Import libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


// Make a component
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.name}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
      },
});


// Make the component available to other parts of the app
export default Header; 