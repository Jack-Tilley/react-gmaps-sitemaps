import React, {useState, useEffect, useContext} from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {MapContext} from './MapContext'

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

const SiteTree = () => {
    const [ myMap, setMyMap, center, setCenter, isLoaded, draw, setDraw] = useContext(MapContext);
    const [nodes, setNodes] = useState(nodes1)
    const [checked, setChecked] = useState(['Mods'])
    const [expanded, setExpanded] = useState([])
    const [target, setTarget] = useState('')

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
            // we set this to true instead of !draw because we dont want the user to be able to click it again
            setDraw(true)
      }
    }

    const updateNodes = (newNodes) =>{
        setNodes(newNodes)
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