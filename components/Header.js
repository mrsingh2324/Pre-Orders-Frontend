import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'; // Add this import

const { width } = Dimensions.get('window');

const Header = ({ userName, onMenuPress }) => {
    const menuAnimation = useRef(new Animated.Value(width)).current;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = useNavigation(); // Add this line to get the navigation object

    const handleMenuPress = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const openMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        Animated.timing(menuAnimation, {
            toValue: width,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setIsMenuOpen(false);
        });
    };

    const handleOverlayPress = () => {
        if (isMenuOpen) {
            closeMenu();
        }
    };

    const handleMenuOptionPress = (routeName) => {
        // Close the menu panel
        closeMenu();

        // Navigate to the selected screen
        navigation.navigate(routeName);
    };

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/images/header/profile.png')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
                <Text style={{ color: 'white', fontSize: 18 }}>{userName}</Text>
            </View>

            {/* Hamburger Button */}
            <TouchableOpacity onPress={handleMenuPress} style={styles.hamburger}>
                <MaterialCommunityIcons name={isMenuOpen ? 'close' : 'menu'} size={24} color="white" />
            </TouchableOpacity>

            {/* Transparent overlay to capture touch events when the menu panel is open */}
            {isMenuOpen && (
                <TouchableWithoutFeedback onPress={handleOverlayPress}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            {/* Sliding menu panel */}
            <Animated.View
                style={[
                    styles.menuPanel,
                    { transform: [{ translateX: menuAnimation }] },
                    { zIndex: isMenuOpen ? 2 : -1 }, // Ensure the menu panel is on top when open
                ]}
            >
                <TouchableOpacity onPress={closeMenu}>
                    <MaterialCommunityIcons name="close" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.menuItems}>
                    {/* Menu Options */}
                    <TouchableOpacity onPress={() => handleMenuOptionPress('Profile')}>
                        <Text style={styles.menuItem}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMenuOptionPress('Settings')}>
                        <Text style={styles.menuItem}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMenuOptionPress('Orders')}>
                        <Text style={styles.menuItem}>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMenuOptionPress('Logout')}>
                        <Text style={styles.menuItem}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMenuOptionPress('Support')}>
                        <Text style={styles.menuItem}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMenuOptionPress('Report')}>
                        <Text style={styles.menuItem}>Report</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1f1fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        zIndex: 1,
    },
    hamburger: {
        padding: 8,
    },
    menuPanel: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: width * 0.7, // Adjust the width of the menu panel as needed
        backgroundColor: '#1f1fbf',
        padding: 16,
    },
    menuItems: {
        backgroundColor: '#1f1fbf',
    },
    menuItem: {
        marginLeft: 40,
        fontSize: 18,
        color: 'white',
        marginBottom: 12,
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
});

export default Header;
