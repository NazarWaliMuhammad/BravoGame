import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from '../screens/login/login.screen';
import SignUpScreen from '../screens/signup/signup.screen';
import HomeScreen from '../screens/Home/Home';
import MainScreen from '../screens/MainLevels/MainLevels';
import SplashScreen from '../screens/splash/splash';
import SubScreen from '../screens/sublevels/sublevels';
import GameScreen from '../screens/game/game';
import FirstTimeLogin from '../screens/FirstTimeLogin/FirstTimeLogin';
function Main() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstTimeLogin" component={FirstTimeLogin} />
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Sub" component={SubScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
