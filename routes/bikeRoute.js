const bikeRouter = require("express").Router()
const bikeModel = require("../models/bikesModel")


// get all bikes data
bikeRouter.get("/", async(req, res) => {
    try {
        let bikes = await bikeModel.find();
        res.status(200).json({bikes,message:"successfully fetched every bike data"})
    } catch (error) {
        res.status(400).json({message:"not able to get bike data",error})
    }
});

// Add New Bike
bikeRouter.post("/addbike", (req, res) => {

    const {bikeCompany , model , cc , image} = req.body;

    const newbike = new bikeModel({
        bikeCompany: bikeCompany,
        model: model,
        cc: cc,
        image:image
    });

    newbike.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    message:"bike added successfully",
                    response
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error : "error in adding new bike",error
            })
        })
});






module.exports = bikeRouter;