const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/taskinternship');
const Schema = mongoose.Schema;

var NewRegisterSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    number:String,
    city:String,
    pincode:String,
    state:String,
    password:String,
    date: Date
});

var Registerdata = mongoose.model('Registerdata', NewRegisterSchema);                  

module.exports = Registerdata;