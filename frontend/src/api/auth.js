import axios from './axios';

export const registerUser = async (userData) => {
    const response = await axios.post('/auth/register', userData);
    return response.data;
};

export const getToken = async (credentials) => {
    const params = new URLSearchParams();
    params.append('username', credentials.username);
    params.append('password', credentials.password);

    const response = await axios.post('/auth/token', params);
    return response.data;
};