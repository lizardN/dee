const mongoose = require('mongoose');


var report2Schema = new mongoose.Schema({


subjectCode:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:String, required:true},
date:{type:String, required:true},




})

module.exports = mongoose.model('Report2', report2Schema);