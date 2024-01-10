const mongoose = require('mongoose');


var reportSchema = new mongoose.Schema({


uid:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:String, required:true},
date:{type:String, required:true},




})

module.exports = mongoose.model('Report', reportSchema);