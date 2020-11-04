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
    const [ myMap, setMyMap, center, setCenter, isLoaded, draw, setDraw, nodes, setNodes, activeNode, setActiveNode] = useContext(MapContext);

    const onPolylineComplete = polyline => {
        // console.log(polyline.getPath().getArray().toString())
        let roughPath = polyline.getPath().getArray().toString().split(",")
        let path = []
        for (let i=0; i<roughPath.length; i+=2){
            path.push(roughPath[i] + "," + roughPath[i+1])
        }

        handleActiveNodeChange(path, "polyline")
        setDraw(false) // we do this instead of !draw because we want drawing component to leave when a new one is added
    }
    
    const onMarkerComplete = marker => {
        let position = ["(" + marker.position.lat() + ", " + marker.position.lng() + ")"]
        handleActiveNodeChange(position, "marker")
        setDraw(false) // we do this instead of !draw because we want drawing component to leave when a new one is added
    }

    const onOverlayComplete = e => {
        // add overlay to nodes
        console.log('Drawing component unmounted')
    }

    const handleActiveNodeChange = (position, nodeType) =>{
        let newActiveNode = activeNode
        newActiveNode.latLngArr = position
        newActiveNode.nodeType = nodeType
        setActiveNode(newActiveNode)
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