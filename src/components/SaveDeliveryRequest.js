import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col, Row } from 'react-bootstrap';

const SaveDeliveryRequest = () => {
  const [formData, setFormData] = useState({
    pickup_id: '',
    delivery_id: '',
    deliver_status_id: '',
    type_of_good_id: '',
    delivery_provider_id: '',
    priority_id: '',
    package_info_id: '',
    shipment_pick_up_date: '',
    shipment_pick_up_time: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:8000/save_delivery_requset', formData);
      alert('Delivery Request created successfully');
    } catch (err) {
      setError('Failed to create delivery request');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="pickup_id">
              <Form.Label>Pickup ID</Form.Label>
              <Form.Control
                type="number"
                name="pickup_id"
                value={formData.pickup_id}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="delivery_id">
              <Form.Label>Delivery ID</Form.Label>
              <Form.Control
                type="number"
                name="delivery_id"
                value={formData.delivery_id}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="deliver_status_id">
              <Form.Label>Delivery Status ID</Form.Label>
              <Form.Control
                type="number"
                name="deliver_status_id"
                value={formData.deliver_status_id}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="type_of_good_id">
              <Form.Label>Type of Good ID</Form.Label>
              <Form.Control
                type="number"
                name="type_of_good_id"
                value={formData.type_of_good_id}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveDeliveryRequest;
