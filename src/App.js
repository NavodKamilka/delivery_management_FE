import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 

import DeliveryList from './components/DeliveryRequestList';  
import CreateDeliveryRequest from './components/SaveDeliveryRequest'; 
import ChangeDeliveryStatus from './components/ChangeDeliveryStatus';  

function App() {
  return (
    <Router>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<DeliveryList />} />
          <Route path="/create" element={<CreateDeliveryRequest />} />
          <Route path="/change-status" element={<ChangeDeliveryStatus />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
