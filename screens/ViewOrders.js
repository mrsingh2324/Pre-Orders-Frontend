import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ViewOrdersScreen = () => {
  const ordersData = [
    // Sample data for orders, you can replace this with actual data from your API or storage
    { id: '1', customerName: 'John Doe', orderTotal: '$30.00', status: 'Pending' },
    { id: '2', customerName: 'Jane Smith', orderTotal: '$25.00', status: 'Completed' },
    // Add more orders data as needed
  ];

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderItem}>
      <Text style={styles.orderText}>Order ID: {item.id}</Text>
      <Text style={styles.orderText}>Customer: {item.customerName}</Text>
      <Text style={styles.orderText}>Total: {item.orderTotal}</Text>
      <Text style={styles.orderText}>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Orders</Text>
      <FlatList
        data={ordersData}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        style={styles.ordersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1fbf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  ordersList: {
    width: '100%',
  },
  orderItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  orderText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
});

export default ViewOrdersScreen;
