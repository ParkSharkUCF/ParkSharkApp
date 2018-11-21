import { createStackNavigator } from 'react-navigation';
import Main from '../../screens/Main';
import Login from '../../screens/Login';

export default createStackNavigator ({
    Main: {screen : Main},
    Login: {screen : Login},
})