import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import OverviewOfPatient from './components/OverviewOfPatient';
import registerServiceWorker from './registerServiceWorker';
import PatientRegistration from './components/PatientRegistration';
import PrintCard from './components/PrintCard';
import {Root} from "./components/Root";


class App  extends React.Component{
    render(){
        return(
            <Router>
                <Root>
                <Route path ="/patientregistration" component={PatientRegistration}/>
                <Route path="/overviewofpatient" component={OverviewOfPatient}/>
                <Route path="/printcard" component={PrintCard}/>
                
                
                </Root>
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
