
var mongoose=require('mongoose');
const Schema=mongoose.Schema;



const PatientSchema=new Schema({
    Full_Name:String,
    other_name:String,
    civil_status:String,
    gender:String,
    DateOfBirth:String,
    nic:String,
    citizenship:String,
    Blood_Group:String,
    preferred_language:String,
    Address:String,
    phone:String,
    contact_person_name:String,
    contact_person_tel:String,
    Choose_file:String,
    Remarks:String

});

mongoose.model('Patient',PatientSchema);
mongoose.connect('mongodb://127.0.0.1:27017/OPD',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('MongoDB is Connected......');
});

module.exports = mongoose;