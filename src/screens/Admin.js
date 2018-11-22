import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {CardSection} from '../components/common';
import Button from '../components/Button';

class Admin extends Component{
    static navigationOptions = {
        title: 'Admin',       
    };
    render(){
        return(
            <View>
                <CardSection>
                    <Button name="Add Garage"/>
                </CardSection>
                <CardSection>
                    <Button name="Delete Garage"/>
                </CardSection>
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
    buttonContainer:{
        backgroundColor: "#2980b9",
        paddingVertical: 10
    },
    buttonText:{
        textAlign: 'center',
        color: "#FFFFFF"
    },
});