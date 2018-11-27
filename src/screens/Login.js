import React, {Component} from 'react';
import {StyleSheet, Text, AsyncStorage} from 'react-native';

import LoginForm from '../components/Login/LoginForm';
import {Button, Card, CardSection, Input, Spinner} from '../components/common';

// Login Page with our logo and calls component LoginForm witch takes care
// of the inputs and login button functionality. 
export default class Login extends Component{
    static navigationOptions = {
        title: 'Admin Login',
    };
    
    // user validation
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        }
    }

    onButtonPress = async () => {
        this.setState({
            error: '', 
            loading: true, 
            email: this.state.email, 
            password: this.state.password
        });
        
        try{
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            if (parsed.email === this.state.email && parsed.password === this.state.password){
                this.props.navigation.navigate('Admin');
            }
            else {
                this.onLoginFail();
            }
        }
        catch(error){
            alert(error);
        }

        
    }

    onLoginFail(){
        this.setState({error: 'Authentication Failed', loading: false})
    }

    renderButton(){
        if (this.state.loading){
            return <Spinner/>;
        }

        return <Button whenPressed={this.onButtonPress.bind(this)} name="Log in"/>
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        label="Email"
                        keyboardType="email-address"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        label="Password"
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3498db"
    },
    title:{
        fontSize: 20,
        color: 'white',
        padding: 20
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer:{

    },
    logo: {
        width: 100,
        height: 100
    },
    test: {
        color: "red"
    },
});
