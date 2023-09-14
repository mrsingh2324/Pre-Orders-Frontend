import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const UserManagementScreen = () => {
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    // Add more sample user data as needed
  ]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const handleAddUser = () => {
    // Implement logic to add a new user to the users state
    const newUser = {
      id: String(users.length + 1),
      name: newUserName,
      email: newUserEmail,
    };
    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserEmail('');
  };

  const handleDeleteUser = (id) => {
    // Implement logic to delete a user from the users state
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>

      {/* Add User Form */}
      <View style={styles.addUserForm}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={newUserName}
          onChangeText={setNewUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={newUserEmail}
          onChangeText={setNewUserEmail}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
          <Text style={styles.addButtonLabel}>Add User</Text>
        </TouchableOpacity>
      </View>

      {/* List of Users */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteUser(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
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
  addUserForm: {
    marginBottom: 20,
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
  addButton: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 16,
  },
  userEmail: {
    color: 'white',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserManagementScreen;
