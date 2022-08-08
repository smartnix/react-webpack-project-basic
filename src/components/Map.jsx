import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';


const Map = ({mapa}) => {
  
  const {latitude = 0, longitude = 0} = mapa[0];
  
  const cor = {
    lat: latitude,
    lng: longitude,
  }
 console.log(cor);
    function LocationMarker() 
    {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
            map.locate()
            },
            locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            },
        })
        
        return position === null ? null : (
            <Marker position={position}>
            <Popup>You are here</Popup>
            </Marker>
        )
    }
return (
  
   <MapContainer
    center={cor}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>
  )
}

export {Map}