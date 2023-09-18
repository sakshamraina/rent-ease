import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

const PropertyList = ({ properties }) => {
  return (
    <Container style={{ paddingTop: '10vh', paddingLeft: '10px', paddingRight: '10px' }}>
      <Row>
        {properties.map((property, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card style={{ marginBottom: '20px', borderRadius: '10px', backgroundColor: '#f4f4f4' }}>
              <div style={{ height: '150px' }}>
                <Card.Img variant="top" src={property.imageSrc} alt="Property" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <Card.Body>
                <Card.Text>Rent: {property.rent}</Card.Text>
                <Card.Title>{property.name}</Card.Title>
                <Card.Text>Location: {property.location}</Card.Text>
                <hr />
                <Card.Text>
                  {property.bedrooms} Beds, {property.bathrooms} Bathrooms, {property.dimensions}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const PropertyCards = () => {
  const properties = [
    {
      imageSrc: 'property1.jpg',
      rent: '₹5,000/month',
      name: 'Property 1',
      location: 'Andheri, Mumbai, India',
      bedrooms: '3',
      bathrooms: '2',
      dimensions: '1200 sqft',
    },
    {
      imageSrc: 'property2.jpg',
      rent: '₹6,500/month',
      name: 'Property 2',
      location: 'Powai, Mumbai, India',
      bedrooms: '2',
      bathrooms: '1',
      dimensions: '950 sqft',
    },
    {
      imageSrc: 'property3.jpg',
      rent: '₹7,200/month',
      name: 'Property 3',
      location: 'Bandra, Mumbai, India',
      bedrooms: '2',
      bathrooms: '2',
      dimensions: '1100 sqft',
    },
    {
      imageSrc: 'property4.jpg',
      rent: '₹5,800/month',
      name: 'Property 4',
      location: 'Juhu, Mumbai, India',
      bedrooms: '1',
      bathrooms: '1',
      dimensions: '800 sqft',
    },
    {
      imageSrc: 'property5.jpg',
      rent: '₹6,300/month',
      name: 'Property 5',
      location: 'Malad, Mumbai, India',
      bedrooms: '2',
      bathrooms: '1',
      dimensions: '900 sqft',
    },
    {
      imageSrc: 'property6.jpg',
      rent: '₹5,400/month',
      name: 'Property 6',
      location: 'Goregaon, Mumbai, India',
      bedrooms: '1',
      bathrooms: '1',
      dimensions: '750 sqft',
    },
    {
      imageSrc: 'property7.jpg',
      rent: '₹6,700/month',
      name: 'Property 7',
      location: 'Thane, Mumbai, India',
      bedrooms: '3',
      bathrooms: '2',
      dimensions: '1250 sqft',
    },
    {
      imageSrc: 'property8.jpg',
      rent: '₹5,200/month',
      name: 'Property 8',
      location: 'Vashi, Mumbai, India',
      bedrooms: '2',
      bathrooms: '1',
      dimensions: '980 sqft',
    },
    {
      imageSrc: 'property9.jpg',
      rent: '₹7,500/month',
      name: 'Property 9',
      location: 'Colaba, Mumbai, India',
      bedrooms: '3',
      bathrooms: '2',
      dimensions: '1300 sqft',
    },
    {
      imageSrc: 'property10.jpg',
      rent: '₹6,800/month',
      name: 'Property 10',
      location: 'Dadar, Mumbai, India',
      bedrooms: '2',
      bathrooms: '1',
      dimensions: '1050 sqft',
    },
    {
      imageSrc: 'property11.jpg',
      rent: '₹5,300/month',
      name: 'Property 11',
      location: 'Navi Mumbai, India',
      bedrooms: '2',
      bathrooms: '1',
      dimensions: '900 sqft',
    },
    {
      imageSrc: 'property12.jpg',
      rent: '₹7,000/month',
      name: 'Property 12',
      location: 'Kandivali, Mumbai, India',
      bedrooms: '3',
      bathrooms: '2',
      dimensions: '1200 sqft',
    },
    // Add more property objects as needed
  ];

  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  );
};

export default PropertyCards;
