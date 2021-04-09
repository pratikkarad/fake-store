import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Row, Col, Form, Image} from 'react-bootstrap';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function handleChange(e) {
        switch(e.target.type) {
            case "email":
                validateEmail(e.target.value) ? setEmailError('') : setEmailError('Invalid Email');
                setEmail(e.target.value);
                break
            case "password":
                validatePassword(e.target.value) ? setPasswordError('') : setPasswordError('Invalid Password');
                setPassword(e.target.value);
                break
            default:
                break;
        }
    }

    function validateEmail(email) {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email) || email == '';
    }

    function validatePassword(pass) {
        const regexPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regexPass.test(pass) || pass == '';
    }

    function handleSubmitForm() {
        
    }

    return (
        <div>
            <Row className="landing">
                <Col>
                    <Form style={{width:"80%", marginLeft:"10%", marginTop:"30%"}}>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" onChange={e => handleChange(e)}/>
                            <span className="error text-danger" style={{fontSize:12}}>{emailError}</span>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" onChange={e => handleChange(e)}/>
                            <span className="error text-danger" style={{fontSize:12}}>{passwordError}</span>
                        </Form.Group>
                        <Button type="submit" onPress={handleSubmitForm}>Submit</Button>
                    </Form>
                </Col>
                <Col>
                    <Image src="./assets/login.jpg" thumbnail style={{border:"none", marginTop:"20%"}} />
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage;