import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home.screen';
import Profile from '../screens/Profile/Profile.screen';
import { screenName } from '../utils/constants/screenNames';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenName.HomeScreen} component={Home} />
        <Stack.Screen name={screenName.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
