import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Admin extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>I'm the Admin screen.</Text>
            </View>
        );
    }
}

export default Admin;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});