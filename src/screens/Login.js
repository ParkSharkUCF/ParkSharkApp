import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';

import LoginForm from '../components/Login/LoginForm';

export default class Login extends Component{
    static navigationOptions = {
        title: 'Admin Login',
    };
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    {/* <Image source={'../../images/ParkSharkLogo.PNG'}/> */}
                    <Text style={styles.title}>Park Shark</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'  
    },
    logo: {
        width: 100,
        height: 100
    },
    title:{
        color: "white",
        marginTop: 10,
        textAlign: 'center'
    },
    formContainer:{
        
    }
});