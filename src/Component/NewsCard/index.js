import { React } from "react";
import "./newscard.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const NewsCard=()=>{
    return(
        <section id="eventcard">
            <div className="container py-5">
                <div className="title text-center py-3">
                    <h1>Latest News</h1>
                    <display2>Serving & Shearing</display2>

                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <img src="https://www.bethlehembcsc.org/wp-content/uploads/2020/11/worship-300x300.jpg"></img>
                              
                              <div className="card-body ">
                                <h5 className="card-title "> Morning Gathering </h5>
                                
                                <p className="card-text">the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
                                                            "the pictures are clear and relate well to the text"</p>
                                <a href="#" class="btn btn-outline-danger">View Detail</a>
                              </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <img src="https://www.bethlehembcsc.org/wp-content/uploads/2020/11/worship-300x300.jpg"></img>
                              
                              <div className="card-body">
                                <h5 className="card-title "> Sprit and truth</h5>
                                
                                <p className="card-text">the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
                                                            "the pictures are clear and relate well to the text"</p>
                                <a href="#" class="btn btn-outline-danger">View Detail</a>
                              </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card text-center">
                            <img src="https://www.bethlehembcsc.org/wp-content/uploads/2020/11/worship-300x300.jpg">
                            </img>
                              
                              <div className="card-body">
                                <h5 className="card-title "> Sunday School </h5>
                                
                                <p className="card-text">the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
                                 "the pictures are clear and relate well to the text"</p>
                                 <a href="#" class="btn btn-outline-danger">View Detail</a>
                              </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
export default NewsCard;