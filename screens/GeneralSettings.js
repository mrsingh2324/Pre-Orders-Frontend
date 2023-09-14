import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Settings = () => {
  // Function to handle General Settings
  const handleGeneralSettings = () => {
    // Implement the logic to navigate to General Settings page
    // For demonstration purposes, let's just log a message
    console.log('General Settings clicked!');
  };

  // Function to handle Opening Hours
  const handleOpeningHours = () => {
    // Implement the logic to navigate to Opening Hours page
    // For demonstration purposes, let's just log a message
    console.log('Opening Hours clicked!');
  };

  // Function to handle Notifications
  const handleNotifications = () => {
    // Implement the logic to navigate to Notifications page
    // For demonstration purposes, let's just log a message
    console.log('Notifications clicked!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleGeneralSettings}>
        <Text style={styles.buttonText}>General Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOpeningHours}>
        <Text style={styles.buttonText}>Opening Hours</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleNotifications}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Settings;
