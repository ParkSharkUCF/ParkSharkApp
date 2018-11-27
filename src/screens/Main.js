import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, ScrollView} from 'react-native';
import Letter from '../components/Garage/Letter';
import Header from '../components/Header';

class Main extends Component{
    static navigationOptions = {
        header: null,
    };

    // These fucking states will break your shit because render gets called no matter what
    // so if you got shit set to null it wont work. Render gets called again once componenet""Mount()
    constructor(props){
        super(props);
        this.state = {
            garages: [],
            sensors: []
        }
    }

    componentDidMount(){
        return fetch('https://murmuring-waters-47073.herokuapp.com/garage')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    garages: responseJson.garages,
                })
            }).then(() => {
                fetch('https://murmuring-waters-47073.herokuapp.com/sensor')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sensors: responseJson.sensors,
                    })
                })
                })
        .catch((error) => {
            console.log(error)
        });        
    }

    getAvailability = (name) => {
        for (var i = 0; i < this.state.garages.length; i++){
            if (name === this.state.garages[i].name){
                //alert("passed = " + name + " tested on = " + this.state.garages[i].name + " TotalSpts = " + this.state.dataSource.totalSpots);
                var count = 0;
                for (var j = 0; j < this.state.sensors.length; j++){
                    if (name === this.state.sensors[j].garage)
                        count += this.state.sensors[j].cars;
                }


                return ((this.state.garages[i].totalSpots-count) + "/" + this.state.garages[i].totalSpots);
            }
        }

        return (0+"/"+0);
    }

    savePass(){
        let obj = {
            email: 'admin@admin.com',
            password: 'admin'
        };
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    saveGarage  = (garageLet) => {
        AsyncStorage.setItem('garageName', garageLet);
        return;
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.garage}>
                    <TouchableOpacity
                        onPress={() => {this.saveGarage("A"); this.props.navigation.navigate('Garage')}}
                        >
                        <Letter 
                            imageUri={require ('../images/Ap.png')}
                            fraction={this.getAvailability("A")}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.saveGarage("B"); this.props.navigation.navigate('Garage')}}
                        >
                        <Letter 
                            imageUri={require ('../images/B.png')}
                            fraction={this.getAvailability("B")}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.saveGarage("C"); this.props.navigation.navigate('Garage')}}
                        >
                        <Letter 
                            imageUri={require ('../images/C.png')}
                            fraction={this.getAvailability("C")}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.saveGarage("D"); this.props.navigation.navigate('Garage')}}
                        >
                        <Letter 
                            imageUri={require ('../images/D.png')}
                            fraction={this.getAvailability("D")}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.saveGarage("E"); this.props.navigation.navigate('Garage')}}
                        >
                        <Letter 
                            imageUri={require ('../images/E.png')}
                            fraction={this.getAvailability("E")}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.saveGarage("F"); this.props.navigation.navigate('Garage')}}
                        >
                        <Letter 
                            imageUri={require ('../images/F.png')}
                            fraction={this.getAvailability("F")}
                            />
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
                        onPress={() => {this.savePass(); this.props.navigation.navigate('Login');}}
                        >
                        <Text style={styles.admin}>Admin Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Main;

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