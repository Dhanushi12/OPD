import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import OverviewOfPatient from './components/OverviewOfPatient';
import registerServiceWorker from './registerServiceWorker';
import PatientRegistration from './components/PatientRegistration';
import PrintCard from './components/PrintCard';
//import {Root} from "./components/Root";


import Header from"./components/Header";
import Home from"./components/Home";

class App  extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <div>
                    <Header/>
                    </div>
                <Route path="/" component={Home}/>
               <Route path ="/PatientRegistration" component={PatientRegistration}/>
               <Route path="/overviewofpatient" component={OverviewOfPatient}/>
                 <Route path="/printcard" component={PrintCard}/>
                
                
              
                </div>
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
