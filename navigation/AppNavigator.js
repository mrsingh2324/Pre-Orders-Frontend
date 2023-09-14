import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import EntryScreen from '../screens/EntryScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Dashboard from '../screens/Dashboard';
// import Settings from '../screens/SettingsScreen';
// import AnalyticsAndReports from '../screens/AnalyticsAndReportsScreen';
import Orders from '../screens/Orders'; // Add this import
import UserManagement from '../screens/UserManagement'; // Add this import
import Profile from '../screens/Profile';
import RestaurantDetails from '../screens/RestaurantDetails';
import CartPage from '../screens/Cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Entry" component={LoginScreen} options={{ tabBarLabel: 'Entry' }} />
    {/* <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel: 'Dashboard' }} /> */}
    <Tab.Screen name="Orders" component={Orders} options={{ tabBarLabel: 'Orders' }} />
    <Tab.Screen name="UserManagement" component={UserManagement} options={{ tabBarLabel: 'Dashboard' }} />
    <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel: 'Dashboard' }} />


    {/* <Tab.Screen name="Settings" component={Settings} options={{ tabBarLabel: 'Settings' }} /> */}
    {/* Add more screens to the bottom tab navigator as needed */}
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Manage" component={UserManagement} />
        {/* <Stack.Screen name="restaurant" component={RestaurantDetails} /> */}
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen name="Cart" component={CartPage} />

        <Stack.Screen
          name="restaurant"
          component={RestaurantDetails}
          options={({ route, navigation }) => ({
            headerTitle: 'header', // Set header title dynamically
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart', { cartItems: cartItems })}>
                <Text style={styles.cartButton}>Go to Cart</Text>
              </TouchableOpacity>
            ),
          })}
        />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} options={({ route }) => ({ headerShown: false })} initialParams={{ user: user, navigation: navigation }}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  cartButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
  },
});
