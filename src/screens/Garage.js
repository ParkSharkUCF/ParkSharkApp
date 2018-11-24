import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';

class Garage extends Component{
    static navigationOptions = {
        title: 'Garage C',
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount(){
        return fetch('https://murmuring-waters-47073.herokuapp.com/sensor')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.sensors,
                })
            })
        .catch((error) => {
            console.log(error)
        });
    }

    render(){

        if (this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
        else{

            let sensors = this.state.dataSource.map((val, key) => {
                return (
                    <View key={key} style={styles.buttonStyle}>
                        <Text style={styles.apiText}>Spot {val.id} : {val.cars}/{val.spots.length}</Text>
                    </View>
                );
            });
            return(
                <View style={styles.container}>                                 
                    {sensors}
                </View>
            );
        }
    }

}

export default Garage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightskyblue'
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    apiText: {
        fontSize: 20
    },
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff', // iOS blue button color
        margin: 5,
    },
});
