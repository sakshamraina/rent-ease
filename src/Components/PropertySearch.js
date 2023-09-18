import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const indianCities = [
  'Select City', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandhigarh', 'Bhopal', 'Indore', 'Patna',
];

function PropertySearch({ onSearch }) {
  const [city, setCity] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [price, setPrice] = useState([0, 10000]);
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = () => {
    onSearch({
      city,
      availableFrom,
      price,
      propertyType,
    });
  };

  return (
    <div className="search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '8vh', backgroundColor: '#fff' }}>
      <div className="property-search-container" style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '10px', marginTop: '0px', marginLeft: '0px', width: '74%' }}>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Form.Group controlId="city">
                <Form.Label style={{ color: 'black' }}>City</Form.Label>
                <Form.Control
                  as="select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ display: 'inline-block', width: '100%', color: 'black', borderColor: 'lightblack' }}
                >
                  {indianCities.map((indianCity) => (
                    <option key={indianCity} value={indianCity}>
                      {indianCity}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="availableFrom">
                <Form.Label style={{ color: 'black' }}>Available From</Form.Label>
                <Form.Control
                  type="date"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  style={{ display: 'inline-block', width: '100%', color: 'black', borderColor: 'lightblack' }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="price">
                <Form.Label style={{ color: 'black' }}>Price Range</Form.Label>
                <Slider
                  min={0}
                  max={10000}
                  step={100}
                  range
                  value={price}
                  onChange={(value) => setPrice(value)}
                  style={{ width: '100%' }}
                />
                <div className="d-flex justify-content-between">
                  <div style={{ color: 'black' }}>{price[0]}</div>
                  <div style={{ color: 'black' }}>{price[1]}</div>
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="propertyType">
                <Form.Label style={{ color: 'black' }}>Property Type</Form.Label>
                <Form.Control
                  as="select"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  style={{ display: 'inline-block', width: '100%', color: 'black', borderColor: 'lightblack' }}
                >
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Button variant="primary" onClick={handleSearch} style={{ marginTop: '32px', width: '60%', borderRadius: '20px', backgroundColor: '#7c65f0', }}>
                Apply
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PropertySearch;