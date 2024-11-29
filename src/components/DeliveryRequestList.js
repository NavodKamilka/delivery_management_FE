import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const DeliveryRequestList = () => {
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveryRequests = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_details'); 
        setDeliveryRequests(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching delivery requests:", error);
        setLoading(false);
      }
    };

    fetchDeliveryRequests();
  }, []);

  return (
    <div>
      <Button href="/create" variant="primary" className="mb-3">
        Create New Delivery Request
      </Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pickup ID</th>
              <th>Delivery ID</th>
              <th>Status ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliveryRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.pickup_id}</td>
                <td>{request.delivery_id}</td>
                <td>{request.deliver_status_id}</td>
                <td>
                  <Button
                    href={`/change-status?delivery_id=${request.id}`}
                    variant="warning"
                  >
                    Change Status
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default DeliveryRequestList;
