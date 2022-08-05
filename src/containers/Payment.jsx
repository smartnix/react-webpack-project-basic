import React, { useContext } from 'react'
import '../styles/components/Payment.css';
import {AppContext} from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  
  const {state:{cart},state:{buyer},addNewOrder} = useContext(AppContext);
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'AafI40cFBfzYSiLWfhFjcMCPuvLcJ4Tj493A2dqllaPQMKWtwDAANb66QuUMUtgZh_YvFYcNCin8AILi',
    intent: 'capture',
    currency: 'USD',

  }

  const buttonStyles = {
    layout:'vertical',
    shape:'rect',
  }

  const obtenerTotal = () => {
    const total = cart.reduce((prev, current)=> prev + current.price,0);
    return total;
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: obtenerTotal(),
          },
        },
      ],
    });
  };

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED')
    {
      const newOrder = {
        buyer,
        product: cart,
        paymente: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function(data) {
      handlePaymentSuccess(data);
    });
  };

  return (
    <div className='Payment'>
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>  
          ))}
        <div className="Payment-button">
           <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onError={(error) => console.log(error)}
            onCancel={data => console.log(data)}
           >
            </PayPalButton>  
        </div>
      </div>
    </div>
  )
}

export {Payment}