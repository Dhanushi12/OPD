import React from "react";
import { Link } from "react-router-dom";
import './PrintCard.css';


export const Header = (props) => {
    //const div22 = {
    //  width: '270px',
    //  height: '1000px'
    // };

    return (

       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" >OPD</a>
               

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a classNmae="nav-link"><Link to={"/patientregistration"} >AddNewPatient</Link></a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
          

           {/* <div className="card text-white bg-secondary mb-3" style={{ width: '20%', height: '100vh', }} >
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Secondary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
    </div>*/}
        </div>


        //<nav >
        // <div className="container">
        // <div >
        // <ul >
        // <li><Link to={"/home"} >Home</Link></li>
        //<li><Link to={"/user"} >User</Link></li>
        // </ul>
        // </div>
        //  </div>
        // </nav>
    );
};