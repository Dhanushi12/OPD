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
  render() {
    return (
      <div className="OverviewOfPatient">
        <center><h1>Overview Of Patient</h1></center>
        <div className="row">
          <div className="col-md-11">
            <div className="card border-info mb-3" style={{ maxWidth: '120rem' }}>
              <div className="card-body">
                <div className="col-md-10">

                  <div className="Details">
                    <h2 id="name" className="Details">Name:</h2>
                    <h2 className="Details">HIN:</h2>
                    <h2 className="Details">gender:</h2>
                    <h2 className="Details">civil_status:</h2>
                    <h2 className="Details">DateOfBirth:</h2>
                    <h2 className="Details">phone:</h2>
                    <h2 className="Details">Address:</h2>
                    <h2 className="Details">Blood Group:</h2>
                    <h2 className="Details">BMI:</h2>

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












