
import { React } from "react";
import "./time.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLocationArrow, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Calender from './../../Widgets/Calender/index';
import Map from "../../Widgets/Map";
import Location from "../../Widgets/Location";



const Time=()=>{
    return(
        <div id="time">
            <div className="container ">
                <div className="row  py-5">
                <div className="col-md-6 p-5  bg-light">
                        <h3>Welcome to Our church</h3>
                        <Calender color="#cf4946"/> &nbsp; <display3>  Monday, 10:00AM - Friday, 10:00 AM</display3><br></br>
                        <Map color="#cf4946"/> &nbsp; <display3 className="text-muted">St.Paul Church</display3><br></br>
                        <Location  color="#cf4946"  /> &nbsp; <display3>S10 10th Ave NE, Bellevut WA 6300S</display3>
                    </div>
                    <div className="color col-md-6 text-white text-center text-bold p-5 bg-danger">
                        <div className="row">
                        <div className="col-md-3 text-center">
                            <h1 className="text-bold">200</h1>
                            <h6> Days</h6>
                            
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-bold">16</h1>
                            <h6> Hours</h6>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-bold">42</h1>
                            <h6> Minutes</h6>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-bold">40</h1>
                            <h6> Seconds</h6>
                        </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default Time;

