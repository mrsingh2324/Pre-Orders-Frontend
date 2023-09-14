import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderNow = ({ route }) => {
    
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Now</Text>
      <View style={styles.orderDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderDetails: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default OrderNow;
