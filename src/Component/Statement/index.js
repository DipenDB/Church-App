import { React } from "react";
import "./statement.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBell, faChild, faCoffee, faHeart, faPagelines } from '@fortawesome/free-solid-svg-icons';


const Statement =()=>{
    return(<div className="container">
                <h1 className="text-center py-3">Statement Of Faith</h1>
                <div className="row">
                    <div className="col-md-4 text-center ">
                        <FontAwesomeIcon icon={faBell} size = '3x' color="#cf4946"/>
                        <h5>What We Believe</h5>
                        <p>Voot is an Indian subscription video on demand service. Launched in March 2016, it forms the online arm of Viacom 18. It is Viacom 18's advertising-led video-on-demand platform that is available as an app for iOS, KaiOS and Android users, and a website for desktop consumption.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faChild} size = '3x' color="#cf4946"/>
                        <h5>What We Believe</h5>
                        <p>Voot is an Indian subscription video on demand service. Launched in March 2016, it forms the online arm of Viacom 18. It is Viacom 18's advertising-led video-on-demand platform that is available as an app for iOS, KaiOS and Android users, and a website for desktop consumption.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faHeart} size = '3x' color="#cf4946"/>
                        <h5>What We Believe</h5>
                        <p>Voot is an Indian subscription video on demand service. Launched in March 2016, it forms the online arm of Viacom 18. It is Viacom 18's advertising-led video-on-demand platform that is available as an app for iOS, KaiOS and Android users, and a website for desktop consumption.</p>
                    </div>
                </div>
           </div>)
}

export default Statement;
