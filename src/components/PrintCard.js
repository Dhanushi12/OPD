import React, { Component } from 'react';
import './PrintCard.css';
import Img from 'react-image';
import patient from './patient.png';
import Barcode from 'react-barcode';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";


class PrintCard extends Component {






  render() {
    return (

      <div className="PrintCard">
        <center><h1>Print Card</h1></center>
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3">
              <Card>
                <center><h3 className="card-header">Patient Card</h3></center>

                <CardBody>
                  <div className="card-body">
                    <h5 className="card-subtitle text-muted">Patient Name :</h5>
                    <h5 className="card-subtitle text-muted">Patient HIN :</h5>

                  </div>
                  <div>

                    <Barcode value="123456789" />
                  </div>
                </CardBody>
  
                <ImageHeader style={{ height: '200px', width: '50%', display: 'block' }} imageSrc={patient} alt="Card image" />

                <div className="card-body">
                  <p className="card-text">Bring this card with you on every visit to hospital.</p>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
        
      </div>


    );
  }
}

class Print extends React.Component {
  render() {
    return (
      <div>
      <PrintCard ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() =>  <button type="Print" className="btn btn-primary">Print</button>}
          content={() => this.componentRef}
        />
        
      </div>
    )
  }
}

export default Print; 