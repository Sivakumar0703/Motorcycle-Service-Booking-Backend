const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({


  name: { // user name
    type: String,
    //required: true
  },

  mobile: {
    type: String,
  //  required: true
  },

  email: {
    type: String,
  //  required: true
  },

  bike: {
    type: String,
  //  required: true
  },

  model: {
    type: String,
   // required: true
  },

  address1: {
    type: String,
   // required: true
  },

  address2: {
    type: String,
   // required: true
  },

  pincode: {
    type: String,
   // required: true
  },

  serviceType: {
    type: String,
   // required: true
  },

  time: {
    type: String,
   // required: true
  },

  serviceDate: {
    type: String,
   // required: true
  },

  homeService:{
    type:Boolean
  },

  userId:{
    type:String
  },

  createdOn: {
    type: Date,
    default: Date.now()
  },
  updatedOn: {
    type: Date,
    default: Date.now()
  },
  paid:{
    type:String
  }
})

module.exports = mongoose.model('bookings', bookingSchema);