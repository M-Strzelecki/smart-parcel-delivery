import React, {useState, useContext} from "react";
import {createParcel} from "../../api/parcels";
import { AuthContext } from "../../contexts/AuthContext";

const CreateParcel = () => {
    const [parcelData, setParcelData] =useState({
        sender_id: '',
        recipient_name: '',
        recipient_address: '',
    });

    const {auth} = useContext(AuthContext);

    const handleChange = (e) =>{
        setParcelData({...parcelData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createParcel(parcelData, auth.access_token);
            alert('Parcel created successfully');
        }catch (error){
            console.error('Failed to create parcel', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="sender_id" placeholder="SenderID" onChange={handleChange}/>
            <input type="text" name="recipient_name" placeholder="Recipient Name" onChange={handleChange}/>
            <input type="text" name="recipient_address" placeholder="Recipient Address" onChange={handleChange}/>
            <button type="submit">Create Parcel</button>
        </form>
    );

};

export default CreateParcel;