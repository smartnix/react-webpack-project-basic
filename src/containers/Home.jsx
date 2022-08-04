import React from 'react';
import { Products } from '../components/Products.jsx';
import initalState from '../initalState.js';

const Home = () => {
  return (
    <Products products={initalState.products} />
  )
}

export  {Home};