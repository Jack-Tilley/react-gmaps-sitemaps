import React, {useState, useEffect, useContext} from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {MapContext} from './MapContext'

const SiteTree = () => {
    const [ myMap, setMyMap, center, setCenter, isLoaded, draw, setDraw, nodes, setNodes] = useContext(MapContext);
    const [checked, setChecked] = useState(['Mods'])
    const [expanded, setExpanded] = useState([])
    const [name, setName]= useState('')

    const onCheck = (checked) => {
        setChecked(checked);
        // console.log(checked)
    }

    const onExpand = (expanded) => {
        setExpanded(expanded);
        // console.log(expanded)
    }
    const onClick = (e) => {
        console.log(e)
        if (e.value === '+'){
            console.log('+ clicked')
            setDraw(true)
            if (!draw){
                addItem(e)
            }
      }
    }
    const addItem = (target) => {
        // updateDM()
        let newNode = {
                value: 'TEST',
                label: 'TEST'
                // icon: <FontAwesomeIcon icon={faHome} />,
        }
        setNodes(nodes.map(item => 
            item.children === target.parent.children
            ? {...item, children : target.parent.children.concat(newNode)} 
            : item
        )); 
    }

    return (
        <>
        <CheckboxTree
            checked={checked}
            expanded={expanded}
            iconsClass="fa5"
            nodes={nodes}
            onCheck={onCheck}
            onExpand={onExpand}
            onClick={onClick}
        >
        </CheckboxTree>
        </>
    );
}


export default SiteTree;