import React, { useState, useCallback, createContext } from 'react'
import {useLoadScript} from '@react-google-maps/api'
import AddNodeForm from './AddNodeForm';

import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nodes1 = [
    {
        value: 'Site1',
        label: 'Site1',
        data: {info: 'CoolBeans'},
        children: [
            {
                value: '+',
                label: '+',
                icon: <FontAwesomeIcon icon={faHome} />,
                disabled: true,
            },
            {
                value: 'Trench',
                label: 'Trench',
                icon: <i className="far fa-file-pdf" />,
            },
            {
                value: 'Tools1',
                label: 'Tools',
                data: {info: 'CoolBeans'},
                icon: <i className="far fa-file-alt" />,
            },
        ],
    },
    {
        value: 'Site2',
        label: 'Site2',
        children: [
            {
                value: 'Tools2',
                label: 'Tools',
                icon: <i className="fa fa-file-image-o" />,
            },
            {
                value: 'Mods',
                label: 'Mods',
                icon: <i className="fa fa-file-image-o" />,
            },
        ],
    },
];

const libraries = ['drawing']

export const MapContext = createContext()

export const MapProvider = props => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 39.9526, lng: -75.1652 });
  const [nodes, setNodes] = useState(nodes1)
  const [draw, setDraw] = useState(false)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    });

  return (
      <MapContext.Provider value={[myMap, setMyMap, center, setCenter, isLoaded, draw, setDraw, nodes, setNodes]}>
        {props.children}
      </MapContext.Provider>
  )

  
}
