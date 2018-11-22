import { createStackNavigator } from 'react-navigation';
import Main from '../../screens/Main';
import Login from '../../screens/Login';
import Admin from '../../screens/Admin';

export default createStackNavigator ({
    Main: {screen : Main},
    //Login: {screen : Login},
    Admin: {screen : Admin}
})