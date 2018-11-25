import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, AsyncStorage} from 'react-native';
import {CardSection} from '../components/common';

class Garage extends Component{
    static navigationOptions = {
        title: "Garage Spots",
        // Maybe fix this with asyncStorage
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            garageLet: '',
            empty: true,
        }
    }

    // Call function inside of did mount
    // functions checks if empy, and if it is in render set differnt view

    // Call the function right after you get a response inside of Fetch
    //#################################################################
    // for loop sensor array and check "garage" == "garageName" 

    isGarageEmpty(){
        //alert(this.state.dataSource.l);
        for (var i = 0; i < this.state.dataSource.length; i++){
            if (this.state.dataSource[i].garage === this.state.garageLet){
                this.setState({
                    empty: false
                })
                break;
            }
        }
        //alert("Hello?");
    }

    garageName = async () => {
        try {
          const value = await AsyncStorage.getItem('garageName');
          if (value !== null) {
            // We have data!!
            this.state.garageLet = value;
            //alert(value);
          }
         } catch (error) {
           // Error retrieving data
         }
      }

    componentDidMount(){

        //this.garageName();

        return fetch('https://murmuring-waters-47073.herokuapp.com/sensor')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.sensors,
                })
                this.isGarageEmpty();
            })
            .catch((error) => {
                console.log(error)
            }
        );
    }

    render(){
        this.garageName();
        if (this.state.isLoading){
            return(
                <View style={styles.container}>                  
                    <ActivityIndicator/>
                </View>
            )
        }
        else if (this.state.empty){
            return(
                <View style={styles.empty}>
                    <Text style={styles.emptyText}>This garage is disabled by Admin or hasn't been set up ):</Text>
                </View>
            );
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
        fontSize: 30
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
    empty:{
        flex: 1,
        backgroundColor: 'lightskyblue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    emptyText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
