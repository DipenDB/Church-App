import { React } from "react";
import "./header.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Header=()=> {
    return(
        <section className="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center py-5">
                        <h2>SIMPLE CSS TEMPLATES</h2>
                        <h5>WELCOME TO OUR CHURCH</h5>
                        <a href="#" className="btn btn-danger text-white btn-outline-secondary">Join With Us</a>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Header;
