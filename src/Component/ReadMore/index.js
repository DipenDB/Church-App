
import { React } from "react";
import "./readmore.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ReadMore =()=>{
    return(
        <div id="readmore">
            <div className="container-fluid ">
                <div className="container  py-5">
                    <div className="row">
                        <div className="col-md-4  ">
                            <h6>Monday, 10:00AM - Friday, 10:00 AM</h6>
                            <h5>Welcome to our church</h5>
                        </div>
                        <div className="col-md-4 ">
                            <h6>St.Paul Church</h6>
                            <h5>510 102m Aw, NE, Bellivue,WA 6005</h5>
                        </div>
                        <div className="col-md-4  py-3 text-right">
                        <a href="#" className="btn   btn-outline-light">Join With Us</a>
                        </div>

                    </div>
                    </div>
            </div>
        </div>
    )
}

export default ReadMore;
