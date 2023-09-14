import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../api/api';
import Dashboard from './Dashboard';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSignup = async () => {
    try {
      // Password validation: Check if password and confirm password match
      if (password !== confirmPassword) {
        setLoginError('Password and confirm password do not match');
        return;
      }

      const userData = { fullName, email, password };
      const response = await signup(userData);

      // Handle successful signup
      navigation.navigate('Dashboard', { user: response });
    } catch (error) {
      // Handle signup error
      setLoginError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Signup form */}
      <View style={styles.signupForm}>
        <Text style={styles.signupTitle}>Signup</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Display login error if there is one */}
        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>

        {/* Or login */}
        <View style={styles.loginLink}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLinkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  signupForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  signupTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
  },
  signupButton: {
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'gray',
  },
  loginLinkText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignupScreen;
