
import { React } from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Calender =(props)=>{
    return (
        <FontAwesomeIcon icon={faCalendarAlt} color={props.color} />
    )
}

export default Calender

