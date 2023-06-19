const paymentRouter = require("express").Router();
const paymentModel = require("../models/paymentModel");

//get all payment details
paymentRouter.get("/",async(req,res) => {
    try {
        let payment = await paymentModel.find();
        res.status(200).json({payment,message:"all payment data are fetched"})
    } catch (error) {
        console.log(error)
        res.status(200).json({message:"not able to fetch payment data"})
    }
});

// add new payment
paymentRouter.post('/payment/info',async(req,res) => {
    //get from front end
      const { brand , model ,  name , registration , date , price , mobile , orderId } = req.body
       console.log('orderid from fron end', orderId) // undefined
    try {
        // post to database
        const newPayment = new paymentModel({
            brand,
            model,
            name,
            registration,
            date,
            price,
            orderId,
            mobile

        })
    
    
       await newPayment.save()
        res.status(200).json({newPayment,message:"payment done"}) // send to front end
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"error occured in payment process",error})
    }
    
    })
    
   // get payment details by using user id 
    paymentRouter.post('/getbooking' , async(req,res) => {
        const userId = req.body.userId ;
    
        try {
            const item = await paymentModel.find({userId : userId})
           res.status(200).json({item})
        } catch (error) {
            res.status(500).json({message:"error occurent during fetching cart items" , error:error})
        }
    })
    
    
    
    
    module.exports = paymentRouter;