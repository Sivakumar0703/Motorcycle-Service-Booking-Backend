const express = require("express");
const app_server = express();
require("./Database/dbconfiguration");
const cors = require('cors')

// routes
const bikeRouter = require("./routes/bikeRoute");
const bookingRouter = require("./routes/bookingRoute");
const paymentRouter = require("./routes/paymentRoute");
const userRouter = require("./routes/userRoute");
const razorRouter = require("./routes/razorpay");






//middleware
app_server.use(cors());
app_server.use(express.json());

app_server.use("/bikes" , bikeRouter);
app_server.use("/bookings" , bookingRouter);
app_server.use("/payments" , paymentRouter);
app_server.use("/users" , userRouter);
app_server.use("/razorpay" , razorRouter);







module.exports = app_server;