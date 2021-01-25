import { React } from "react";
import "./footer.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer=()=>{
    return(
        <section id="footer">
            <div className="container-fluid text-center">
                <div className="row py-3 ">
                    <display2>@Copyright 2020 / DipenDB</display2>
                </div>
            </div>
        </section>
    )
}

export default Footer;
