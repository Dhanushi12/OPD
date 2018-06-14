import React from "react";
//import './home.css';
import { Link } from "react-router-dom";


//import PatientRegistration from './component/PatientRegistration';
import OverviewOfPatient from './OverviewOfPatient';
export class Home extends React.Component {

    render() {

        return (
            <center><div className="">
                Home
              <Link to={"/PatientRegistration"}>PatientRegistration</Link>
                {/*<Link to={"/overviewofpatient"}>OverviewOfPatient</Link>*/}     
            </div></center>
        );
    }
}
export default Home;    

