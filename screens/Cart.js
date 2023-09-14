import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import {StripeProvider} from '@stripe/stripe-react-native';

const CartPage = ({ route }) => {
    const { cartItems } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Text style={styles.cartItemName}>{item.name}</Text>
                        {/* //please dont try adding .fixedto */}
                        <Text style={styles.cartItemPrice}>Price: ${item.price}</Text> 
                    </View>
                )}
            />
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
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
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cartItemName: {
        fontSize: 18,
    },
    cartItemPrice: {
        fontSize: 16,
        color: '#777',
    },
    orderButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 16,
        alignSelf: 'flex-end',
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartPage;
