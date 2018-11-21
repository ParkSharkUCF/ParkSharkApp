import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

class Contacts extends Component{
    static navigationOptions = {
        title: 'Contacts',
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title}>Contact the Developers</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Text style={styles.name}>Travis Bangs</Text>
                    <Text style={styles.textStyle}>
                        He's a computer Engineer that worked on the firmware.
                        {"\n"}Contact Travis: tbangs89@gmail.com
                    </Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Text style={styles.name}>Keegan Conway</Text>
                    <Text style={styles.textStyle}>
                        He's a Computer Engineer that worked on the CV and backend.
                        {"\n"}Contact Keegan: k2700h@gmail.com
                    </Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Text style={styles.name}>Marcelino Galarza</Text>
                    <Text style={styles.textStyle}>
                        He's a Computer Engineer that worked on the mobile app.
                        {"\n"}Contact Marcelino: marcelinogalarza8@gmail.com
                    </Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Text style={styles.name}>Beatrize Jimenez</Text>
                    <Text style={styles.textStyle}>
                        She's an Electrical Engineer that worked on the electrical components.
                        {"\n"}Contact Beatrize: beaj1195@gmail.com
                    </Text>
                </View>
            </View>
        );
    }
}

export default Contacts;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightskyblue'
    },
    title: {
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: 30,
    },
    box: {
        marginVertical: 10,
        backgroundColor: 'lightblue',
        //borderColor: 'green',
        width: Dimensions.get('window').width,
    },
    name:{
        fontWeight: '800',
        fontSize: 20,
    },
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff', // iOS blue button color
        margin: 5,
        // marginLeft: 5,
        // marginRight: 5,
        
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600', // boldness
        paddingTop: 10,
        paddingBottom: 10,
    }
});