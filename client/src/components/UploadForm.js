import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './UploadForm.css'; // Import your custom CSS

function UploadForm() {
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [validated, set_Validated] = useState(false);
    const [form_Data, set_Form_Data] = useState({
        name: '',
        phone_number: '',
        address: '',
        email: ''
    });

    const chngFn = (event) => {
        const { name, value } = event.target;
        set_Form_Data({
            ...form_Data,
            [name]: value,
        });
    };

    const submitFn = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        set_Validated(true);

        event.preventDefault();
        setLoading(true);

        try {
            const apiUrl = `${process.env.REACT_APP_API_KEY}/api/auth/createCard`;
            const res = await axios.post(apiUrl, form_Data);

            console.log(res);
            console.log("success");

            setSuccessMessage('Upload Data Success'); // Set the success message
            set_Form_Data({
                name: '',
                phone_number: '',
                address: '',
                email: ''
            });
            set_Validated(false);
        } catch (error) {
            setSuccessMessage('Upload Data Failed');
            console.error('Error uploading data:', error);
        }

        setLoading(false);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col
                        md={{
                            span: 6,
                            offset: 3,
                        }}
                    >
                        <div className="border border-primary rounded px-4  py-9 shadow-lg form-container " >
                            <h1 className="text-center text-primary my-4">Upload Data</h1>

                            <Form noValidate validated={validated} onSubmit={submitFn}>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                         type="text"
                                         name="name"
                                         value={form_Data.name}
                                         onChange={chngFn}
                                         pattern="^[a-zA-Z ]+$"
                                         required
                                         isInvalid={validated && !/^[a-zA-Z ]+$/.test(form_Data.name)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid username (alphabet characters only).
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={form_Data.email}
                                        onChange={chngFn}
                                        required
                                        isInvalid={validated && !/^\S+@\S+\.\S+$/.test(form_Data.email)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={form_Data.address}
                                        onChange={chngFn}
                                        pattern="^[a-zA-Z0-9 ]+$"
                                        required
                                        isInvalid={validated && !/^[a-zA-Z0-9 ]+$/.test(form_Data.address)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid address (alphanumeric characters only).
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text" // Use text type to apply pattern validation
                                        name="phone_number"
                                        value={form_Data.phone_number}
                                        onChange={chngFn}
                                        pattern="\d{10}"
                                        maxLength={10}
                                        required
                                        isInvalid={validated && !/^\d{10}$/.test(form_Data.phone_number)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid 10-digit phone number.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit" className="submit-button px-4">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {successMessage && (
                <div className={`success-message ${successMessage === 'Upload Data Success' ? 'bg-success' : 'bg-danger'}`}>
                    {successMessage}
                </div>
            )}
        </div>
    );
}

export default UploadForm;
