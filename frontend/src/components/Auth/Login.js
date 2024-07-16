import React, {useState, useContext} from 'react';
import { getToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');//clear prev error
        try{
            const data = await getToken(credentials);
            setAuth(data);
            localStorage.setItem('token', data.access_token);//store token in local storage
            alert('Login successful');
            navigate('/parcels');//redirect to ..
        }catch (error){
            console.error('Login failed',error);
            setError('Login failed. Please check your username and password.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
            <button type='submit'>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    );
};

export default Login;