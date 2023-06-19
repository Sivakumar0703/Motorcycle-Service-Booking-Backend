const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({


brand : {
    type:String,
  //  required:true
},

model : {
    type:String,
  //  required:true
},

registration: {
    type:String,
  //  required:true
},

name : {
    type:String,
  //  required:true
},

date : {
    type:String,
  //  required:true
},

time : {
    type:String,
  //  required:true
},
price : {
    type:String,
  //  required:true
},
mobile : {
  type:String,
},

orderId : {
    type:String,
  //  required:true
  
},

createdOn: {
    type: Date,
    default: Date.now()
},

updatedOn: {
    type: Date,
    default: Date.now()
}
})

module.exports = mongoose.model('payments' , paymentSchema);