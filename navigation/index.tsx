import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapsComponent from '~/components/MapsViewComponent';
import DevicesContainer from '~/screens/DevicesContainer';
import HardwaresContainer from '~/screens/HardwaresContainer';
import { HomeContainer } from '~/screens/Home';
import { LoginContainer } from '~/screens/Login';
import Maps from '~/screens/Maps';
import SimCardsContainer from '~/screens/SimCardsContainer';
import TabNavigator from './tab-navigator';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
  Login: undefined;
  Home: undefined;
  MapContainer: undefined;
  MapsView: undefined;
  SimCardsContainer: undefined;
  DevicesContainer: undefined;
  HardwaresContainer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="MapContainer"
          component={Maps}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="MapsView"
          component={MapsComponent}
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="SimCardsContainer"
          component={SimCardsContainer}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="DevicesContainer"
          component={DevicesContainer}
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="HardwaresContainer"
          component={HardwaresContainer}
          options={{ headerShown: false }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
