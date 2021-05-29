import React, { useContext, useState } from 'react';
import { If, Else, Then } from 'react-if';
import { LoginContext } from './context';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';


const Login = () => {
    const loginContext = useContext(LoginContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUsername(e) {
        setUsername(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginContext.login(username, password);
    }

    return (
        <If condition={loginContext.loggedIn}>
            <Then>
            <Button style={{ float: 'right', marginTop:'-45px'}} onClick={loginContext.logout}>Log Out</Button>
            </Then>
            <Else>
                <Card style={{float: 'left',width:"300px", margin:'100px',marginTop:"100px", marginLeft:'350px', padding:'20px'}}>
                <h3>Sign In Form</h3>

                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Enter your username"  onChange={handleChangeUsername} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </Card>
            </Else>
        </If>
    );
};

export default Login;