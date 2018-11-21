import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Letter extends Component{
    // static navigationOptions = {
    //     title: 'HOME',
    // }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.visual}>
                    <Image style={styles.image} source={this.props.imageUri}/>
                </View>
                <View style={styles.text}>
                    <Text>Percent full: %</Text>
                </View>
            </View>
        );
    }
}

//<Text>{this.props.name}</Text>

export default Letter;

const styles = StyleSheet.create({
    container:{
        height: 120, 
        width: 120,
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: 'red',
    },
    visual: {
        flex: 2,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        paddingLeft: 10, 
        paddingTop: 10,
        alignItems: 'center'
    }
});