import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const RestaurantDetails = ({ route, navigation }) => {
    const { restaurant } = route.params;

    // const navigation =useNavigation();
    // const { restaurant } = route.params;

    const [menuItems, setMenuItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        // Simulate fetching items from menuItems.json (replace with actual fetch)
        const fetchData = async () => {
            try {
                const response = await require('../utils/menuItems.json');
                setMenuItems(response);
                setFilteredItems(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (query) => {
        const filtered = menuItems.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
        setSearchQuery(query);
    };
    const addToCart = (item) => {
        // Check if the item is already in the cart
        const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (!itemInCart) {
            // Add the item to the cart
            setCartItems([...cartItems, item]);
            console.log('Added to cart:', item);
        } else {
            console.log('Item is already in the cart:', item);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search items..."
                value={searchQuery}
                onChangeText={handleSearch}
            />

            <FlatList
                data={filteredItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.menuItem}>
                        {/* <Image source={require('../assets/images/pizza.jpg')} style={styles.foodImage} /> */}
                        <View style={styles.detailsContainer}>
                            <Text style={styles.name}>name</Text>
                            <Text style={styles.price}>Price: $item.price.toFixed(2)</Text>
                            <Text style={styles.rating}>Rating: rating ⭐</Text>
                            <Text style={styles.description}>description</Text>
                        </View>
                        <TouchableOpacity style={styles.orderButton} onPress={() => addToCart(item)}>
                            <Text style={styles.orderButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.orderButton}
                            onPress={() => navigation.navigate('Cart', { cartItems: cartItems })}
                        >
                            <Text style={styles.orderButtonText}>Go to Cart</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

export default RestaurantDetails;
