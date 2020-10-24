import React, { useState, useCallback, createContext } from 'react'
import {useLoadScript} from '@react-google-maps/api'

export const MapContext = createContext()

export const MapProvider = props => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 39.9526, lng: -75.1652 });

  return (
      <MapContext.Provider value={[myMap, setMyMap, center, setCenter]}>
        {props.children}
      </MapContext.Provider>
  )

  
}
