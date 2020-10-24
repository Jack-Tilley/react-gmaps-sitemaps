import React, {useState, useContext} from 'react';
import {MapContext} from './MapContext'
import { GoogleMap, useLoadScript} from '@react-google-maps/api'


const libraries = ['drawing']
const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const Map = () => {
  const [ myMap, setMyMap, center, setCenter] = useContext(MapContext);
//   const [ center, setCenter ] = useState({ lat: 39.9526, lng: -75.1652 });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    });
  
  const renderMap = () => (
    <>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
          options={options}
        >
        </GoogleMap>
    </>
  )

  return isLoaded ? renderMap() : null;
}

export default Map;

