import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1>Login Page</h1>
            <Link to="/register">Register Page</Link>
        </>
    );
};

export default Login;
