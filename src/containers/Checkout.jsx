import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {

  const {state:{cart}, removeFromCart} = useContext(AppContext);

  const obtenerTotal = () => {
    const total = cart.reduce((prev, current)=> prev + current.price,0);
    return total;
  }

  return ( 
    <div className='Checkout'>
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        {
          cart.map(product => (
          <div className="Checkout-item" key={product.id}>
            <div className="Checkout-element">
              <h4>{product.title} </h4>
              <span>$ {product.price}</span>
            </div>
            <button type='button'>
              <i className="fas fa-trash-alt" onClick={()=>removeFromCart(product)}></i>
            </button>
          </div>
          ))
        }
      </div>
      {
        cart.length>0 && (
          <div className="Checkout-sidebar">
            <h3>Total: ${`${obtenerTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type='button'>
                Continuar pedido
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export {Checkout};