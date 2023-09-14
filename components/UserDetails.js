import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ user }) => {
  return (
    <View style={styles.userDetailsContainer}>
      <View style={styles.userDetailsPanel}>
        <Text style={styles.userName}>{user.fullName}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        {/* Add other user details here */}
        {/* For example: */}
        {/* <Text style={styles.userDetail}>Age: {user.age}</Text> */}
        {/* <Text style={styles.userDetail}>Address: {user.address}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userDetailsContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#ffffff', // White background color for the container
    borderRadius: 8,
    elevation: 4, // Add shadow for Android
  },
  userDetailsPanel: {
    padding: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333', // Dark text color
  },
  userEmail: {
    fontSize: 18,
    color: '#666666', // Medium-dark text color
    marginBottom: 16,
  },
//   Add styles for other user details if needed
  userDetail: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
});

export default UserDetails;
