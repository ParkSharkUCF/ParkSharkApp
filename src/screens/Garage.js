import React, {Component} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';
import SensorDetail from '../components/SensorDetail';
import Header from '../components/Header';
import Api from '../components/Api';

class Garage extends Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         dataSource: []
    //     }
    // }

    // componentDidMount(){
    //     fetch('https://murmuring-waters-47073.herokuapp.com/sensor')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         this.setState({
    //             dataSource: responseJson.sensors
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error) 
    //     })
    //     //.then((data) => this.setState({sensors: data}));
    // }

    // // lastUpdated: 1542567549.2079113,
    // // _id: "5bd694f21ce49d0015e565c1",
    // // id: 1,
    // // cars: 0,
    // // __v: 0

    // renderItem = ({item}) => {
    //     return(
    //         <View style={{flex : 1, flexDirection: 'row'}}>
    //             <View style={{flex : 1, justifyContent: 'center'}}>
    //                 <Text>{item.cars}</Text>
    //             </View>

    //         </View>
    //     )
    // }

    // // renderSensors(){
    // //     return this.state.sensors.map(sensors => 
    // //         <SensorDetail key={sensors.id} sensors={sensors}/>    
    // //     );
    // // }

    

    // render(){
    //     return(
    //         <View style={styles.container}>
    //             <View>
    //                 <Text>I'm here?</Text>
    //             </View>
    //             <FlatList 
    //                 data={this.state.dataSource}
    //                 renderItem={this.renderItem}
    //             />
    //         </View>
    //     );
    // }


    // *******************************************

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
                        <Text style={styles.apiText}>Floor {val.id} : {val.cars}/4</Text>
                    </View>
                );
            });
            return(
                <View style={styles.container}>                   
                    <Header name="Garage: X"/>                 
                    {sensors}
                </View>
            );
        }
    }

    // ***********************************************

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isLoading: true,
    //         dataSource: null,
    //     }
    // }

    // componentDidMount(){
    //     return fetch('https://murmuring-waters-47073.herokuapp.com/sensor')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: responseJson.sensors,
    //             })
    //         })
    //     .catch((error) => {
    //         console.log(error)
    //     });
    // }

    // render(){

    //     if (this.state.isLoading){
    //         return(
    //             <View style={styles.container}>
    //                 <ActivityIndicator/>
    //             </View>
    //         )
    //     }
    //     else{

    //         let sensors = this.state.dataSource.map((val, key) => {
    //             return (
    //                 <View key={key} style={styles.buttonStyle}>
    //                     <Text style={styles.apiText}>Floor {val.id} : {val.cars}/1</Text>
    //                 </View>
    //             );
    //         });
    //         return(
    //             <View style={styles.container}>                   
    //                 <Header name="Garage: X"/>                 
    //                 {sensors}
    //             </View>
    //         );
    //     }
    // }

}

export default Garage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
