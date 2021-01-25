import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { React } from "react";
import "./eventcard.css"
import Calender from './../../Widgets/Calender/index';
import Map from './../../Widgets/Map/index';
import Location from './../../Widgets/Location/index';

const EventCard = ()=> {
    return(
        <section id="eventcard">
            <div className="container">
                <div className="title text-center py-3">
                    <h1>Our Events</h1>

                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card ">
                            <img src="https://www.insidesources.com/wp-content/uploads/2017/10/bigstock-150163592-300x300.jpg"></img>
                              
                              <div className="card-body text-left">
                                <h5 className="card-title "> Morning Gathering </h5>
                                <Calender color="#cf4946"/><display3>&nbsp; Monday, 10:00AM - Friday, 10:00 AM</display3><br></br>
                                <Map  color="#cf4946"/><display3 className="text-muted"> &nbsp; St.Paul Church</display3><br></br>
                                <Location  color="#cf4946"/><display3> &nbsp; 510 102m Aw, NE, Bellivue,WA 6005</display3><br></br><br></br>
                                <p className="card-text">the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
                                                            "the pictures are clear and relate well to the text"</p>
                              </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <img src="https://www.insidesources.com/wp-content/uploads/2017/10/bigstock-150163592-300x300.jpg"></img>
                              
                              <div className="card-body text-left">
                                <h5 className="card-title "> Sprit and truth</h5>
                                <Calender color="#cf4946"/><display3>&nbsp; Monday, 10:00AM - Friday, 10:00 AM</display3><br></br>
                                <Map  color="#cf4946"/><display3 className="text-muted"> &nbsp; St.Paul Church</display3><br></br>
                                <Location  color="#cf4946"/><display3> &nbsp; 510 102m Aw, NE, Bellivue,WA 6005</display3><br></br><br></br>
                                <p className="card-text">the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
                                                            "the pictures are clear and relate well to the text"</p>
                              </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <img src="https://www.insidesources.com/wp-content/uploads/2017/10/bigstock-150163592-300x300.jpg">
                            </img>
                              
                              <div className="card-body text-left">
                                <h5 className="card-title "> Sunday School </h5>
                                <Calender color="#cf4946"/><display3>&nbsp; Monday, 10:00AM - Friday, 10:00 AM</display3><br></br>
                                <Map  color="#cf4946"/><display3 className="text-muted"> &nbsp; St.Paul Church</display3><br></br>
                                <Location  color="#cf4946"/><display3> &nbsp; 510 102m Aw, NE, Bellivue,WA 6005</display3><br></br><br></br>
                                <p className="card-text">the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
                                                            "the pictures are clear and relate well to the text"</p>
                              </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default EventCard;
