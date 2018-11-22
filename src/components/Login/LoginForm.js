import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    returnKeyType="next"
                    />
                <TextInput 
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('Admin')}
                    >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: "rgba(255,255,255,0.5)",
        marginBottom: 20,
        color: "white",
        paddingHorizontal: 10
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