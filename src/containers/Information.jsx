import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Information.css';
import { AppContext } from '../context/AppContext';


const Information = () => {

  const {state:{cart}, addToBuyer} = useContext(AppContext);

  const form  = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(form.current);
    const buyer = {
      name:formData.get('name') ,
      email:formData.get('email') ,
      address:formData.get('address'),
      apto:formData.get('apto'),
      city:formData.get('city'),
      country:formData.get('country'),
      state:formData.get('state'),
      phone:formData.get('phone'),
    }
    addToBuyer(buyer);
     navigate('/checkout/payment');
    //navigate('/checkout/success');
  
  }

  return (
    <div className='Information'>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
            <div className="Information-next">
                <button type='button' onClick={handleSubmit}>Pagar</button> 
            </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {
          cart.map((item) =>(
            <div className="Information-item" key={item.title}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export {Information};