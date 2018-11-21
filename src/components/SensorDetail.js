import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SensorDetail = ({sensor}) => {
    const {cars} = sensor;
    return(
        <View style={styles.buttonStyle}>
            <Text style={styles.textStyle} >
                {cars}
            </Text>
        </View>
    );
};

export default SensorDetail;

const styles = StyleSheet.create({
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff', // iOS blue button color
        marginLeft: 5,
        marginRight: 5,
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