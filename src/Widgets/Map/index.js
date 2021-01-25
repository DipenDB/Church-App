
import { React } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Map =(props)=>{
    return (
        <FontAwesomeIcon icon={faMapMarkedAlt}  color={props.color} />
    )
}

export default Map

