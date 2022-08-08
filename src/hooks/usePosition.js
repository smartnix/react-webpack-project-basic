import { useEffect, useState } from 'react';


const usePosition = (address) => {

  const [loading, setloading] = useState(true);
  const [mapa, setMapa] = useState([{}]);
    
    const API = `http://api.positionstack.com/v1/forward?access_key=4e329cbba66dc4ec06fd44498e5d2302&query=${address}}`;

    useEffect(() => {

      try 
      {
         const fetchData = async () => {
            const res = await fetch(API);
            const value = await res.json();
            
            setMapa(value.data);
            setloading(false);
         }; 
         fetchData();
      } catch (error) 
      {
        console.error(error);
      }
    }, [])

    return {
      mapa,
      loading
    }
}

export  {usePosition}