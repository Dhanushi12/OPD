const express=require('express');
var Routes=express.Router();
var PatientRoute=require('./Controller/Patient.Route');


Routes.use('/patient/',PatientRoute);
module.exports = Routes;