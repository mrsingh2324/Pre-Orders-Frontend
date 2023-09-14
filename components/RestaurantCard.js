import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RestaurantCard = ({ restaurantName, onPress }) => {
  return (
    <TouchableOpacity style={styles.restaurantCardContainer} onPress={onPress}>
      <View style={styles.restaurantCard}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {/* Add more restaurant details here if needed */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantCardContainer: {
    borderRadius: 8,
    overflow: 'hidden', // Clip the rounded corners
    elevation: 4, // Add shadow for Android
    marginVertical: 8,
  },
  restaurantCard: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default RestaurantCard;
