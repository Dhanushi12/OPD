import React, { Component } from 'react';
import './OverviewOfPatient.css';
import Img from 'react-image';
import patient from './patient.png';
import { Link } from "react-router-dom";
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import axios from 'axios';


class OverviewOfPatient extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      patients: []
    }
    const update = this.props;
    axios.get('http://localhost:3001/patient/', { headers: { "Authorization": "abc" } })
      .then(function (response) {
        console.log(response);
        //        document.getElementById('name').value=document.getElementById('name').value+response
      }).catch(function (err) {
        console.log(err);
      });
  }
  componentDidMount(){
    this.fillForm(this);
  }
  fillForm(obj) {
    document.getElementById('name').innerHTML+=sessionStorage.getItem('patientname');
    document.getElementById('nic').innerHTML+=sessionStorage.getItem('patientnic');
    document.getElementById('gender').innerHTML+=sessionStorage.getItem('patientgender');
    document.getElementById('status').innerHTML+=sessionStorage.getItem('patientstatus');
    document.getElementById('dob').innerHTML+=sessionStorage.getItem('patientdob');
    document.getElementById('phone').innerHTML+=sessionStorage.getItem('patientphone');
    document.getElementById('address').innerHTML+=sessionStorage.getItem('patientaddress');
    document.getElementById('blood').innerHTML+=sessionStorage.getItem('patientblood');


    sessionStorage.getItem('patientnic');
    // sessionStorage.getItem('patientname');
    sessionStorage.getItem('patienthin');
    sessionStorage.getItem('patientgender');
    sessionStorage.getItem('patientstatus');
    sessionStorage.getItem('patientdob');
    sessionStorage.getItem('patientphone');
    sessionStorage.getItem('patientaddress');
    sessionStorage.getItem('patientblood');
  }
  render() {
    return (
      <div className="OverviewOfPatient">
        <center><h1>Overview Of Patient</h1></center>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="card border-info mb-3" style={{ maxWidth: '120rem' }}>
              <div className="card-body">
                <div className="col-md-10">

                  <div className="Details">
                    <h2 id="name" className="Details">Name:</h2>
                    <h2 id="nic" className="Details">nic:</h2>
                    <h2 id="gender" className="Details">gender:</h2>
                    <h2 id="status" className="Details">civil_status:</h2>
                    <h2 id="dob" className="Details">DateOfBirth:</h2>
                    <h2 id="phone" className="Details">phone:</h2>
                    <h2 id="address" className="Details">Address:</h2>
                    <h2 id="blood" className="Details">Blood Group:</h2>
                    <h2 id="bmi" className="Details">BMI: Not Calculated</h2>

                    <div className="rus">
                      <ImageHeader style={{ height: '155px', width: '200px', display: 'block' }} imageSrc={patient} alt="Card image" />
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <button type="DisplayPatientCard" className="btn btn-primary">
                          <Link style={{ color: 'black' }} to={"/printcard"}>Display Patient Card</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default OverviewOfPatient;












