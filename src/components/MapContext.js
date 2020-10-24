import React, { useState, useCallback, createContext } from 'react'
import {useLoadScript} from '@react-google-maps/api'

const libraries = ['drawing']

export const MapContext = createContext()

export const MapProvider = props => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 39.9526, lng: -75.1652 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    });

  return (
      <MapContext.Provider value={[myMap, setMyMap, center, setCenter, isLoaded]}>
        {props.children}
      </MapContext.Provider>
  )

  
}
