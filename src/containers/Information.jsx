import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';


const Information = () => {
  return (
    <div className='Information'>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" name="name" placeholder='Nombre Completo' />
            <input type="text" name="address" placeholder='Dirección' />
            <input type="text" name="email" placeholder='Correo Electronico' />
            <input type="text" name="apto" placeholder='Apartemento' />
            <input type="text" name="city" placeholder='Ciudad' />
            <input type="text" name="country" placeholder='Pais' />
            <input type="text" name="cp" placeholder='Codigo postal' />
            <input type="text" name="phpne" placeholder='Telefono' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <Link to="/checkout/payment">
            <div className="Information-next">
              Pagar
            </div>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-elment">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Information};