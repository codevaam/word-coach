import axios from 'axios';
import Head from 'next/head';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Router from 'next/router';



const Register = () => {
    const handleNameChange = () => {
        updateUname(event.target.value)
    }

    const handleStdChange = () => {
        updateStd(event.target.value)
    }
    const addUser = () => {
        axios.post('http://localhost:8080/users/addUser', {
            email: localStorage.getItem('email'),
            uname: uname,
            std: std
        }).then(res => {
            if(res.data = true) {
                Router.push('/');
            }
            else {
                alert("some error occured please try again")
            }
        })
    }
    const [uname, updateUname] = useState('');
    const [std, updateStd] = useState('');
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
            </Head>
            <h3>You are almost done</h3>
            <h4>Enter these few details to finish your signup process</h4><br />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <p className="form-label">Username</p>
                    <Form.Control type="email" placeholder="Enter username" onChange={handleNameChange} />
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                    <p className="form-label">Standard</p>
                    <Form.Control as="select" custom onChange={handleStdChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={addUser}>
                    Submit
                </Button>
            </Form>
            <style jsx>{`
                h3,h4 {
                    text-align: center;
                }
                {/* .form-label {
                    color: white
                } */}
            `}</style>
        </div>
    )
}

export default Register