// Importing packages
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Form, Header, Message } from "semantic-ui-react";   // Importing from CSS library
import login from '../Redux/jsonStore/login.json'   // importing login details from defined json data

const Login = () => {

    const dispatch = useDispatch();

    // Defining local state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false);

    // Validating form and giving error if fails
    const handleSubmit = () => {
        if(email !== login.username || password !== login.password ){
            setFormError(true)
        } else {
            dispatch({  // dispatching user information
                type: "SET_USER",
                payload: email
            })
        }
    }

    return (
        <div className="auth-content">
            <div className="auth-card">
                <img src="https://www.appinessworld.com/images/appiness-logo.png" alt="Logo" className="auth-logo" />
                <Header as="h2" textAlign="center">
                    Log in
                </Header>
                <Form 
                    onSubmit={handleSubmit}
                    error={formError} 
                    className="auth-form"
                >
                    <Form.Input
                        fluid
                        icon="user"
                        required
                        type="email"
                        iconPosition="left"
                        placeholder="E-mail address"
                        className="auth-input-field"
                        onChange={(e, {value})=> setEmail(value)}
                    />
                    <Form.Input
                        fluid
                        required
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        className="auth-input-field"
                        onChange={(e, {value})=> setPassword(value)}
                    />
                    <Message
                        error
                        header='Invalid Credentials'
                    />
                    <Button
                        color="teal"
                        fluid size="huge"
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;