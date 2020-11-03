import React, {useState, useContext, useEffect} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {MapContext} from './MapContext'

const AddNodeModal = ({modalOpen, setModalOpen, value, setValue, nodeType, setNodeType, addItem, event, setEvent}) => {
  const [ myMap, setMyMap, center, setCenter, isLoaded, draw, setDraw, nodes, setNodes] = useContext(MapContext)
  

  const handleClose = (type) => {
    setDraw(true)

    // add coords here before we add the item
    addItem(event)
    setModalOpen(false);
    setEvent('')
  };

  const handleMarker = () => {
    console.log('MARKER', value)
    setNodeType('marker')

    handleClose()
    
  }
  const handlePolyline = () => {
    console.log('POLYLINE', value)
    setNodeType('polyline')

    handleClose()
    
  }
  const handlePolygon = () => {
    console.log('POLYGON', value)
    setNodeType('polygon')

    handleClose()
  }

  return (
    <div>
      <Dialog open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Node</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new Node here (TODO: add icons for node here too)
          </DialogContentText>
          <TextField
            autoFocus
            value={value}
            margin="dense"
            id="name"
            label="Node Name"
            type="text"
            onChange={e => setValue(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleMarker} color="primary">
            Add Marker
          </Button>
          <Button onClick={handlePolyline} color="primary">
            Add Polyline
          </Button>
          <Button onClick={handlePolygon} color="primary">
            Add Polygon
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNodeModal