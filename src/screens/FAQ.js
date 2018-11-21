import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Linking} from 'react-native';

import Button from '../components/Button';

class FAQ extends Component{
    static navigationOptions = {
        title: 'FAQ',
    };
    
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>Which garages have elevators?</Text>
                        <Text>
                            Garages A, C, E, G H and Libra are equipped with elevators.
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>Is there free parking after 5:30 PM</Text>
                        <Text>
                            There is no free parking on campus. However, after 5:30PM, 
                            students with valid UCF permits are permitted to park in B and C lots. 
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>Where can visitors park on campus?</Text>
                        <Text>
                            Visitors may park in any D (green) student lot or garage once 
                            a daily permit has been purchased.
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>I live on campus, where can I park?</Text>
                        <Text>
                            Between the hours of 7am and 5:30pm, residents are restricted 
                            to their designated residential lots. However after 5:30pm, 
                            residents can park in any D, C or B designated areas except for 
                            2 hours reserved or any other labeled space.
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>How is Parking and Transportation Services funded?</Text>
                        <Text>
                            Parking and Transportation Services is self-funded.
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>Will there be UCF shuttles to the UCF Downtown Campus?</Text>
                        <Text>
                            Shuttles will be provided effective fall semester 2019.
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>How much is CFE Arena event parking?</Text>
                        <Text>
                            The fee may be either $5.00 or $10.00.
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>If I have a valid UCF parking permit, am I permitted to park in the garages during an event at the arena?</Text>
                        <Text>
                        Yes, you are still able to park in the garages being used for the event.
                        </Text>
                    </View>
                    <View>
                        <Button whenPressed={() => Linking.openURL("https://parking.ucf.edu/faqs/")} name="UCF's FAQs"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default FAQ;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightskyblue',
    },
    box: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'lightskyblue'
    },
    title: {
        fontWeight: "700",
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
});