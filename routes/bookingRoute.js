const bookingRouter = require("express").Router()
//const bookingModel =  require("../models/bookingsModel")
const bookingModel =  require("../models/bookingModel")


// get all general service bookings data 
bookingRouter.get("/", async(req, res) => {
    try {
        let bookings = await bookingModel.find();
        res.status(200).json({bookings,message:"successfully fetched every booking data"})
    } catch (error) {
        res.status(400).json({message:"not able to get bookings data",error})
    }
});

// get all repair service bookings data 
// bookingRouter.get("/general", async(req, res) => {
//     try {
//         let bookings = await generalServiceBookingModel.find();
//         res.status(200).json({bookings,message:"successfully fetched every bike data"})
//     } catch (error) {
//         res.status(400).json({message:"not able to get bookings data",error})
//     }
// });

// Add New Booking - general service
bookingRouter.post("/general/service/addbooking", (req, res) => {

    // const {bike , city , date , district , houseNumber , mobile , model , name , pincode , register , street } = req.body;
    const {bike , date, mobile , model , name , register , email ,serviceType ,time  } = req.body;

    const generalBooking = new bookingModel({
        bike,
        date,
        mobile,
        model,
        name,
        time,
        register,
        email,
        serviceType,
      
       
    });

    generalBooking.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"booking added successfully",
                    response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding new booking",error
            })
        })
});

//  Add New Booking - repair service 
 bookingRouter.post("/repair/service/addbooking", (req, res) => {

    // const {bike , city , date , district , houseNumber , mobile , model , name , pincode , register , street } = req.body;
    const {name , mobile , email , bike , model , address1 , address2 , pincode , serviceType , serviceDate , time} = req.body;
    const repairBooking = new bookingModel({
      
        name,
        mobile,
        email,
        bike,
        model,
        address1,
        address2,
        pincode,
        serviceType,
        serviceDate,
        time
       
    });

    repairBooking.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"booking added successfully",
                    response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding new booking",error
            })
        })
});

//  Add New Booking - water wash service 
bookingRouter.post("/water/wash/service/addbooking", (req, res) => {


    const {name , mobile , email , bike , model , address1 , address2 , pincode , serviceType , serviceDate , time , homeService , userId , paid} = req.body;
     const waterWashHomeBooking = new bookingModel({
      
        name,
        mobile,
        email,
        bike,
        model,
        address1,
        address2,
        pincode,
        serviceType,
        serviceDate,
        time,
        homeService,
        userId,
        paid
       
    });

    const waterWashBooking = new bookingModel({
      
        name,
        mobile,
        email,
        bike,
        model,
        serviceType,
        serviceDate,
        time,
        homeService,
        userId,
        paid
       
    });

    if(req.body.homeService) {
        waterWashHomeBooking.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"booking added successfully",
                    response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding new booking",error
            })
        })

    } else {
        waterWashBooking.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"booking added successfully",
                    response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding new booking",error
            })
        })

    }

       
        
});


module.exports = bookingRouter;