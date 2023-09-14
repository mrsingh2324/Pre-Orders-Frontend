import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

const Dashboard = ({ route, navigation }) => {
  const { user } = route.params; // Extract user from route.params

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/fetch');
      if (response.data && response.data.results && response.data.results.data) {
        setApiData(response.data.results.data);
      } else {
        console.log('Data structure is not as expected:', response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header userName={user.user.fullName} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Featured Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {apiData.length > 0 ? (
            apiData.map((item) => (
              <TouchableOpacity
                key={item.location_id}
                style={styles.card}
                onPress={() => {
                  navigation.navigate('restaurant', { restaurant: item });
                }}
              >
                <Image source={{ uri: item.photo.images.original.url }} style={styles.cardImage} />
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Loading... </Text>
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
  },
  cardImage: {
    width: 176,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 16,
    color: '#888',
  },
});
