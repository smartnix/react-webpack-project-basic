import React, { useContext } from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Header = () => {

  const {state:{cart}} = useContext(AppContext);
  

  return (
    <div className='Header'>
        <h1 className="Header-title">
        <Link to="/">
            Merch
        </Link>
        </h1>
        <div className="Header-checkout">
            <Link to="/checkout">
                <i className="fas fa-shopping-basket">
                  {cart.length && <div className='Header-alert'>{cart.length}</div>}
                </i>
            </Link>
        </div>
    </div>
  )
}

export {Header}