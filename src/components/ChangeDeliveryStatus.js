import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ChangeDeliveryStatus = () => {
  const [statusData, setStatusData] = useState({ deliver_status_id: '' });
  const [error, setError] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const deliveryId = queryParams.get('delivery_id');

  useEffect(() => {
    if (!deliveryId) {
      setError('Delivery ID is required');
    }
  }, [deliveryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatusData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://127.0.0.1:8000/change_delivery_status`, {
        delivery_id: deliveryId,
        deliver_status_id: statusData.deliver_status_id,
      });
      alert('Delivery status updated');
    } catch (err) {
      setError('Failed to update delivery status');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="deliver_status_id">
          <Form.Label>Delivery Status ID</Form.Label>
          <Form.Control
            as="select"
            name="deliver_status_id"
            value={statusData.deliver_status_id}
            onChange={handleChange}
            required
          >
            <option value="">Select status</option>
            <option value="3">Cancel</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChangeDeliveryStatus;
