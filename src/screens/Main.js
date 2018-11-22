import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
import Letter from '../components/Garage/Letter';

export default class Main extends Component{
    static navigationOptions = {
        title: 'Main',
    };

    saveData(){
        let obj = {
            email: 'admin@admin.com',
            password: 'admin'
        };
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.garage}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Garage')}
                        >
                        <Letter imageUri={require ('../images/A.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Letter imageUri={require ('../images/A.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Letter imageUri={require ('../images/A.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Letter imageUri={require ('../images/A.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Letter imageUri={require ('../images/A.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Letter imageUri={require ('../images/A.jpg')}/>
                    </TouchableOpacity>
                </View>


                <View style={styles.info}>
                    <TouchableOpacity
                        style={styles.faq}
                        onPress={() => this.props.navigation.navigate('FAQ')}
                        >
                        <Text style={styles.faq}>FAQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contact}
                        onPress={() => this.props.navigation.navigate('Contacts')}
                        >
                        <Text style={styles.contact}>Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.admin}
                        onPress={() => {this.saveData(); this.props.navigation.navigate('Login');}}
                        >
                        <Text style={styles.admin}>Admin Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightskyblue'
    },
    info:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    garage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 2,
        justifyContent: 'center',

    },
    faq: {
        fontSize: 30,
    },
    contact: {
        fontSize: 30,
    },
    admin: {
        fontSize: 30,
    },
});