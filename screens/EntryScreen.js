import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EntryScreen = () => {
  const navigation = useNavigation();

  const handleUserSelection = async (userType) => {
    navigation.navigate('Login', { userType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you a Seller or a Buyer?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUserSelection('Seller')}
      >
        <Text style={styles.buttonText}>Seller</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUserSelection('Buyer')}
      >
        <Text style={styles.buttonText}>Buyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1fcf',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default EntryScreen;
