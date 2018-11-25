import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {CardSection, Input, Spinner} from '../components/common';
import Button from '../components/Button';

class Admin extends Component{
    static navigationOptions = {
        title: 'Admin',       
    };

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            garage: [],
            sensors: [],
            loading: false,
            totalSensors: 0,
        }
    }

    

    onButtonPressEnable(){
        this.setState({loading: true});

        for (var i = 0; i < this.state.totalSensors; i++){
            this.state.sensors[i] = this.state.name+(i+1);
        }

            fetch(`https://murmuring-waters-47073.herokuapp.com/garage/${this.state.name}`,{
                method: 'PATCH',
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sensors: this.state.sensors,
                    totalSpots: this.state.totalSensors
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    garage: responseJson.garage,
                    loading: false
                })
                //alert(responseJson.garage[0].totalSpots);
            })
            .catch((error) => {
                console.log(error)
            });        
        
    }

    onButtonPressDisable(){
        this.setState({loading: true});

            fetch(`https://murmuring-waters-47073.herokuapp.com/garage/${this.state.name}`,{
                method: 'PATCH',
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sensors: [],
                    totalSpots: 0
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    garage: responseJson.garage,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            });        
        
    }

    renderButton(title){
        if (this.state.loading){
            return <Spinner/>;
        }

        if (title === "Disable Garage")
            return <Button whenPressed={this.onButtonPressDisable.bind(this)} name={title}/>
        else
            return <Button whenPressed={this.onButtonPressEnable.bind(this)} name={title}/>
    }

    render(){
        return(
            <View>
                <CardSection>
                   {this.renderButton("Enable Garage")}
                </CardSection>
                <CardSection>
                    {this.renderButton("Disable Garage")}
                </CardSection>
                <CardSection>
                    <Input 
                        placeholder="Garage Letter"
                        label={"Garage"}
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}                
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        placeholder="####"
                        label={"Number of Sensors"}
                        value={this.state.totalSensors}
                        onChangeText={totalSensors => this.setState({totalSensors})}                
                        />
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
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
});