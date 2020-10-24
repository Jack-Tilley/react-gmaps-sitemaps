import React, {useState, useContext} from 'react';
import {MapContext} from './MapContext'
import { DrawingManager } from '@react-google-maps/api'


const options = {
    polylineOptions : {
        strokeWeight : 10,
        // editable : true,
    },
    markerOptions : {
        title: "Hello",
        label: "hi",
        icon: {
            url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
    }
}

const DrawingComponent = () => {
    const [ myMap, setMyMap, center, setCenter, isLoaded, draw, setDraw, nodes, setNodes] = useContext(MapContext);

    const onPolylineComplete = polyline => {
        console.log(polyline.getPath().getArray().toString())
        setDraw(false) // we do this instead of !draw because we want drawing component to leave when a new one is added
    }
    
    const onMarkerComplete = marker => {
        console.log("(" + marker.position.lat() + "," + marker.position.lng() + ")")
        setDraw(false) // we do this instead of !draw because we want drawing component to leave when a new one is added
    }
    const onOverlayComplete = e => {
        // add overlay to nodes
        console.log('Drawing component unmounted')
    }
    

    const renderDrawingComponent = () => (
        <>
            <DrawingManager onOverlayComplete={onOverlayComplete} onPolylineComplete={onPolylineComplete} onMarkerComplete={onMarkerComplete} options={{options}}>
            </DrawingManager>
        </>
      )
    return draw ? renderDrawingComponent() : null
}
export default DrawingComponent