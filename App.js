/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

// In App.js in a new project;
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingScreen from './screens/SettingScreen';
import PersonalInformation from './screens/PersonalInformation';
import Email from './screens/Email';
import Security from './screens/Security';
import Security2 from './screens/Security2';
import Currentaddress from './screens/Currentaddress';
import LimitPerDay from './screens/LimitPerDay';
import Terms from './screens/Terms';
import ContactUs from './screens/ContactUs';
import ChangeEmail from './screens/ChangeEmail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Setting'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Security" component={Security2} />
        <Stack.Screen name="Currentaddress" component={Currentaddress} />
        <Stack.Screen name="LimitPerDay" component={LimitPerDay} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


//npx react-native start

//npx react-native run-android