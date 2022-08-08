import React, { useContext } from 'react';
import '../styles/components/Success.css';
import { Map } from '../components/Map';
import { usePosition } from '../hooks/usePosition';
import { AppContext } from '../context/AppContext';

const Success = () => {

  const {state:{buyer}} = useContext(AppContext);
  const address = buyer[0].address;
  const {mapa,loading} = usePosition(address);
 
  return (
    <div className='Success'>
    {
     !loading && (
            <div className="Success-content">
              <h2>Santiago, gracias por tu compra</h2>
              <span>Tu pedido llegara en 3 dias a tu direccion: </span>
                <div className="Success-map">
                  <Map mapa={mapa}/>
                </div>
            </div>
      )}
  </div>
  )
}

export {Success}