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
            dataSource: null,
            lowBat: ["All is good"],
            bateryLow: false,
            //enabled: 0
        }
    }

    componentDidMount(){

        return fetch('https://murmuring-waters-47073.herokuapp.com/sensor')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    //isLoading: false,
                    dataSource: responseJson.sensors,
                })
                //this.isBatteryLow();
            })
            .catch((error) => {
                console.log(error)
            }
        );
    }

    isBatteryLow(){
        
        var index = 0;
        for (var i = 0; i < this.state.dataSource.length; i++){
            if (this.state.dataSource[i].batLevel == 1){
                this.state.lowBat[index++] = this.state.dataSource[i].id;
                this.setState({
                    isBatteryLow: true
                })
            }
        }

        if (!this.state.bateryLow){
            alert("All sensors are fine!");
        }
    }

    onButtonPressEnable(){
        this.setState({loading: true});

        for (var i = 0; i < this.state.totalSensors; i++){
            this.state.sensors[i] = (i+1)+this.state.name;
        }

            fetch(`https://murmuring-waters-47073.herokuapp.com/garage/${this.state.name}`,{
                method: 'PATCH',
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sensors: this.state.sensors,
                    enabled: 1
                    //totalSpots: this.state.totalSensors
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
                    enabled: 0
                    //totalSpots: 0
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
        else if (title === "Enable Garage")
            return <Button whenPressed={this.onButtonPressEnable.bind(this)} name={title}/>
        else 
            return <Button whenPressed={this.isBatteryLow.bind(this)} name={title}/>
    }

    render(){
        if (this.state.isBatteryLow){
            return (
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
                    <CardSection>
                        {this.renderButton("Check Batter Status")}
                    </CardSection>
                    <View>
                        {this.state.lowBat.map((item, key) =>(
                            <Text key={key} style={styles.TextStyle}>Sensor :{item} is low{"\n"}</Text>
                        ))}
                    </View>
                </View>
            );
        }
        else
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
                <CardSection>
                    {this.renderButton("Sensor Battery Status")}
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
    TextStyle: {
        fontSize: 20,
        textAlign: 'center',
    },
    missingView: {
        borderBottomWidth: 1,
        padding: 5, // spaceing between content and border
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',       
    }
});