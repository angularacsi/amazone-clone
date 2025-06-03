
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import ImageCarousel from './Components/Carousel/ImageCarousel';
import Category from './Components/Category/Category';
import Products from './Components/Products/Products';
import Routing from './Routing';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Routing />

      <Footer />

    </>
  );
}

export default App;
