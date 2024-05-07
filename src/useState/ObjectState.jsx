import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function ObjectState() {
    const [info, setInfo] = useState({
        'name': '',
        'email': '',
        'contact': 0,
        'password': ''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setInfo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
        console.log(info)
    }
    return (
        <>
            <Form className="container mt-5 border border-1 border-black p-5 rounded-5 bg-primary text-white" onSubmit={handleSubmit}>
                <h1 className="d-flex justify-content-center ">Information Card </h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" name="name" 
                    onChange={e => {
                        setInfo({
                            ...info,
                            name: e.target.value
                        });
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="email" onChange={e => {
                        setInfo({
                            ...info,
                            email: e.target.value
                        });
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="number" placeholder="Enter your mobile number" name="contact" onChange={e => {
                        setInfo({
                            ...info,
                            contact: e.target.value
                        });
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" name="password" onChange={e => {
                        setInfo({
                            ...info,
                            password: e.target.value
                        });
                    }} />
                </Form.Group>
                <div className="d-flex justify-content-center ">
                    <Button variant="dark" type="submit" className="w-50 p-3" >
                        Submit
                    </Button>
                </div>
            </Form>
            <div className="container d-flex justify-content-center  p-5">
                {
                    info.name.trim() !== '' ?
                        <>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>Name :- {info.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Contact No :-{info.contact}</Card.Subtitle>
                                    <hr />
                                    <Card.Text>
                                        Email And Password
                                    </Card.Text>
                                    <Card.Footer >{info.email} | {info.password}</Card.Footer>
                                </Card.Body>
                            </Card>
                        </>
                        : <p>user not set</p>
                }
            </div>
        </>
    )
}

export default ObjectState