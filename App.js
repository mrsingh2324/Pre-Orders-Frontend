import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StripeProvider } from '@stripe/stripe-react-native';
import AppNavigator from './navigation/AppNavigator';
// import { StripeProvider } from '@stripe/stripe-react-native';


const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  // const STRIPE_KEY = 'pk_live_51NeXXsSDBuvoVsg2AZWZEJT82R8IQJa6L4VKfRfoi9rPrNYgmJpERkdSyeAf15IIHe8iQzPT1qiUy67ePhdRhxLm00S6ieft17';

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const user = JSON.parse(userData);
          setUserLoggedIn(user);
        } else {
          setUserLoggedIn(false);
        }
      } catch (error) {
        console.log('Error checking user login:', error);
      }
    };
    checkUserLoggedIn();
  }, []);

  if (userLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    // <StripeProvider publishableKey={STRIPE_KEY}> {/* Wrap your AppNavigator with StripeProvider */}
      <AppNavigator userLoggedIn={userLoggedIn} /> 
    // </StripeProvider>
  );
};

export default App;
