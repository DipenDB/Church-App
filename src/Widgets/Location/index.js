
import { React } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Location =(props)=>{
    return (
        <FontAwesomeIcon icon={faLocationArrow} color={props.color} title={props.title}/>
    )
}

export default Location;

