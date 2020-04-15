import axios from 'axios';
import Head from 'next/head';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Router from 'next/router';



const Register = () => {
    const handleUnameChange = () => {
        updateUname(event.target.value)
    }
    const handleNameChange = () => {
        updateName(event.target.value)
    }

    const handleStdChange = () => {
        updateStd(event.target.value)
    }
    const handleCityChange = () => {
        updateCity(event.target.value)
    }
    const handleCountryChange = () => {
        updateCountry(event.target.value)
    }
    const addUser = () => {
        axios.post('http://localhost:8080/users/addUser', {
            name: name,
            email: localStorage.getItem('email'),
            uname: uname,
            std: std,
            country: country,
            city: city
        }).then(res => {
            if (res.data = true) {
                Router.push('/');
            }
            else {
                alert("some error occured please try again")
            }
        })
    }
    // const [filterInput, setFilterInput] = useReducer(
    //     (state, newState) => ({...state, ...newState}),{
    //         name: "",
    //         uname: "",
    //         std: "",
    //         country: "",
    //         city: ""
    //     }
    // )
    const [name, updateName] = useState('');
    const [uname, updateUname] = useState('');
    const [std, updateStd] = useState('');
    const [country, updateCountry] = useState('');
    const [city, updateCity] = useState('');
    return (
        <div className="bg">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
            </Head>
            <h3 className="text-white">You are almost done</h3>
            <h4 className="text-white">Enter these few details to finish your signup process</h4><br />
            <Form className="container">
                <Form.Group controlId="formBasicEmail">
                    <p className="form-label text-white">Full name*</p>
                    <Form.Control type="text" placeholder="Enter username" onChange={handleNameChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <p className="form-label text-white">Username*</p>
                    <Form.Control type="text" placeholder="Enter username" onChange={handleUnameChange} />
                </Form.Group>


                <Form.Group controlId="exampleForm.SelectCustom">
                    <p className="form-label text-white">Standard*</p>
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

                <Form.Group controlId="formBasicEmail">
                    <p className="form-label text-white">Country*</p>
                    <Form.Control type="text" placeholder="Enter country" onChange={handleCountryChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <p className="form-label text-white">City*</p>
                    <Form.Control type="text" placeholder="Enter city" onChange={handleCityChange} />
                </Form.Group>
                <center>
                    <Button variant="primary" onClick={addUser}>
                        Submit
                    </Button>
                </center>
            </Form>
            <style jsx>{`
                .bg {
                    padding-top: 10%;
                }
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