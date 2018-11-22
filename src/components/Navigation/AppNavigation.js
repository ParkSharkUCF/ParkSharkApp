import { createStackNavigator } from 'react-navigation';
import Main from '../../screens/Main';
import FAQ from '../../screens/FAQ';
import Garage from '../../screens/Garage';
import Contacts from '../../screens/Contacts';
//import Admin from '../../screens/Admin';
import Login from '../../screens/Login';

export default createStackNavigator ({
    Main: {screen : Main},
    Garage: {screen : Garage},
    FAQ: {screen : FAQ},
    Contacts: {screen : Contacts},
    //Admin: {screen : Admin},
    Login: {screen : Login},
})