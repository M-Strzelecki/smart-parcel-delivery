import React, {useState} from 'react';
import { registerUser } from '../../api/auth';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await registerUser(formData);
            alert('Registered successfully');
        }catch(error){
            console.error('Registration failed: ' + error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Username' onChange={handleChange} />
            <input type='email' name='email' placeholder='Email' onChange={handleChange} />
            <input type='password' name='password' placeholder='Password' onChange={handleChange} />
            <button type='submit'>Register</button>
        </form>    
    );
};

export default Register;