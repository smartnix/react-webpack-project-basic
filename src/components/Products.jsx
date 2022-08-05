import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/Products.css';
import { Product } from "../components/Product";

const Products = () => {

  const {state:{products}, addTocart} = useContext(AppContext);

  const handleAddToCart = (product) => {
    addTocart(product);
  
  }

  return (
    <div className='Products'>
        <div className="Products-items">
            {
                products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))
            }
        </div>
    </div>
  )
}

export {Products}