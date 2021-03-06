import React, {useState } from 'react';

import api from '../services/api';

import './Login.css';
import Logo from '../assets/logo.png';

export default function Chat({ history }) {

    const [name, setName] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        const response = await api.post('/users', { name });
        history.push(`/contacts/${response.data._id}`);
    }

    return (
        <div className="login-container">
            <img src={Logo}/>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
                <button type="submit" onClick={handleLogin}>Enter</button>
            </form>
        </div>
    );

}