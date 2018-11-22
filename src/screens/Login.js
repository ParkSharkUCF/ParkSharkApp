// import React, {Component} from 'react';
// import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';

// import LoginForm from '../components/Login/LoginForm';

// export default class Login extends Component{
//     static navigationOptions = {
//         title: 'Admin Login',
//     };

import React, {Component} from 'react';
import {StyleSheet, Text, AsyncStorage} from 'react-native';

import LoginForm from '../components/Login/LoginForm';
import {Button, Card, CardSection, Input, Spinner} from '../components/common';
// import ApiUtils from '../components/ApiUtils';

// Login Page with our logo and calls component LoginForm witch takes care
// of the inputs and login button functionality. 
export default class Login extends Component{
    
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

    // Check to see if user has already loged in or not,
    // called before the render function
    // componentDidMount(){
    //     this._loadInitialState().done();
    // }

    // _loadInitialState = async () => {

    //     // var value = await AsyncStorage.getItem('email');
    //     // if (value !== null){    // If already loged in send to main
    //     //     this.props.navigation.navigate('Main');       
    //     // }

    //     var key = await AsyncStorage.getItem('user');
    //     // let parsed = JSON.parse(key);
    //     // if (parsed.id !== null){
    //     //     this.props.navigation.navigate('Main');
    //     // }
    //     if (key !== null){
    //         this.props.navigation.navigate('Main');
    //     }
        
    // }

    // onButtonPress = async () => {
    //     try{
    //         let user = await AsyncStorage.getItem('user');
    //         let parsed = JSON.parse(user);
    //         alert(parsed.password);
    //     }
    //     catch(error){
    //         alert(error);
    //     }
    // }

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

    //onButtonPress(){
        // var key = await AsyncStorage.getItem('user');
        // if (key === 'Admin'){
        //     this.props.navigation.navigate('Admin');
        // }
        // else{
        //     this.onLoginFail();
        // }
        // // This will clear out the error message as soon as you press button
        // this.setState({error: '', loading: true});

        // fetch('http://10.0.2.2:3000/api/Users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',    // Type of file you're willing to accept
        //         'Content-Type': 'application/json', // Content-Type for post and put, type of file you're uploading
        //     },
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         password: this.state.password,
        //     })
            
        // } )
        // .then(ApiUtils.checkStatus)
        // .catch(this.onLoginFail())
        // .then((response) => response.json())
        // .then((res) => {
        //     //if(res){
        //         alert(res.id);
        //         AsyncStorage.setItem('user', res); // This will store the return object (Derefrence by using AsyncStorage.getItem('user'))
        //         this.props.navigation.navigate('Main');         
        //     // }
        //     // else {
        //     //     this.onLoginFail();
        //     // }
        // });
    //}

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
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placeholder="password"
                        value={this.state.text}
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
//     render(){
//         return(
//             <KeyboardAvoidingView behavior="padding" style={styles.container}>
//                 <View style={styles.logoContainer}>
//                     {/* <Image source={'../../images/ParkSharkLogo.PNG'}/> */}
//                     <Text style={styles.title}>Park Shark</Text>
//                 </View>
//                 <View style={styles.formContainer}>
//                     <LoginForm navigation={this.props.navigation}/>
//                 </View>
//             </KeyboardAvoidingView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "black"
//     },
//     logoContainer:{
//       alignItems: 'center',
//       flexGrow: 1,
//       justifyContent: 'center'  
//     },
//     logo: {
//         width: 100,
//         height: 100
//     },
//     title:{
//         color: "white",
//         marginTop: 10,
//         textAlign: 'center'
//     },
//     formContainer:{
        
//     }
// });