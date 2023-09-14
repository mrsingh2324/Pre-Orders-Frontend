import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="App" component={AppNavigator} />
        {/* Add more drawer screens here as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
