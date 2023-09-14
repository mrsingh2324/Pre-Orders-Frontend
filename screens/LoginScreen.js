import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { login } from '../api/api'; // Import the login function from api.js

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Get the route object to access the passed parameters
  const [loginMail, setLoginMail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Extract the userType from the route parameters and update the state
    const userTypeParam = route.params?.userType;
    setUserType(userTypeParam);
  }, [route.params]);

  const handleLogin = async () => {
    try {
      const loginData = { loginMail, loginPassword };
      const response = await login(loginData);

      // Handle successful login, e.g., navigate to the main app screen
      console.log(response);
      console.log(response.message);
      // console.log('Dashboard')
      // alert('Login successful');
      
      navigation.navigate('Dashboard', { user: response }); // Pass the user data to the Dashboard
    } catch (error) {
      // Handle login error
      alert('Login unsuccessful');
      console.log(error);
      // You can show an error message to the user if the login fails.
    }
  };

  return (
    <View style={styles.container}>
      {/* UserType display */}
      {userType && <Text style={styles.userTypeText}>User Type: {userType}</Text>}

      {/* Rest of the login form */}
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={loginMail}
          onChangeText={setLoginMail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={loginPassword}
          onChangeText={setLoginPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Login using Google and others */}
        <View style={styles.loginOptions}>
          <View style={styles.dividerLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.socialLoginContainer}>{/* Add Google and Facebook login buttons */}</View>

        {/* Or signup */}
        <View style={styles.signupLink}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLinkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1fbf', // Changed background color to a blue shade
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    top: 100, // Adjust the top position to create space for the userTypeText
  },
  loginTitle: {
    fontSize: 30, // Increase font size for the title
    fontWeight: 'bold',
    marginBottom: 10, // Increase spacing
    color: 'white',
  },
  input: {
    width: 300, // Increase input width
    height: 50, // Increase input height
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10, // Increase spacing
    paddingHorizontal: 15, // Increase horizontal padding
    fontSize: 16, // Increase font size for input text
    color: 'black',
    backgroundColor: 'white',
  },
  loginButton: {
    width: 300, // Increase button width
    height: 50, // Increase button height
    backgroundColor: 'blue',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Increase spacing
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Increase font size for button text
  },
  loginOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Increase spacing
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'gray',
  },
  orText: {
    color: 'white',
    marginHorizontal: 8,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    marginTop: 10, // Increase spacing
  },
  signupLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Increase spacing
  },
  signupText: {
    color: 'gray',
  },
  signupLinkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // Increase font size for link text
    marginLeft: 5, // Increase spacing
  },
  userTypeText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: 50, // Adjust the top position to place the userTypeText at the top
  },
});

export default LoginScreen;
