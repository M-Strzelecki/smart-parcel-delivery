import React, {useState, useContext} from 'react';
import { getToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const {setAuth} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const data = await getToken(credentials);
            setAuth(data);
            alert('Login successful');
        }catch (error){
            console.error('Login failed',error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;