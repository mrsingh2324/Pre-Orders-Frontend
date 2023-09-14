import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Update with your backend URL

export const signup = async (userData) => {
  console.log('signup called');
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data; // Return only the data from the response
  } catch (error) {
    throw error.response;
  }
};

export const login = async (loginData) => {
  console.log('login called');
  try {
    const response = await axios.post(`${BASE_URL}/login`, loginData);
    console.log(response.data); // Log the response data before returning it
    return response.data;
  } catch (error) {
    throw error.message;
  }
};