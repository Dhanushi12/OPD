import React from "react";
import './home.css';
import { Link } from "react-router-dom";


import PatientRegistration from './components/PatientRegistration';
import OverviewOfPatient from './OverviewOfPatient';
export class Home extends React.Component {

    render() {

        return (
            <div className="abc">
                Home
                <Link to={"/patientregistration"}>PatientRegistration</Link>
                <Link to={"/overviewofpatient"}>OverviewOfPatient</Link>   
            </div>
        );
    }
}


