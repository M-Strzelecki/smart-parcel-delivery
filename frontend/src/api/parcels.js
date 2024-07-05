import axios from './axios';

export const createParcel = async (parcelData, token) => {
    const response = await axios.post('/parcels/', parcelData,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getParcelDetails = async (parcelId, token) => {
    const response = await axios.get(`/parcels/${parcelId}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getParcelsByUser = async (userId, token) => {
    const response = await axios.get(`/parcels/user/${userId}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};