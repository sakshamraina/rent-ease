import React from 'react';
import CustomNavbar from '../Components/Navbar';
import WeatherComponent from '../Components/PropertySearch';
import NewsComponent from '../Components/Properties';
import Footer from '../Components/Footer';
import PropertySearchHeading from '../Components/PropertySearchHeading';

function Home() {
  return (
    <>
      <PropertySearchHeading />
      <CustomNavbar />
      <WeatherComponent />
      <NewsComponent />
      <Footer />
    </>
  );
}

export default Home;
