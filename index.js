const express = require("express");
const router = express.Router();
const  node_server= express()
const app_server = require("./app");
const cors = require('cors')





const port = 8000;


node_server.use("/",app_server);
app_server.use(cors());




node_server.use("/",router);

router.get('/', function(req, res) {
  try {
    res.status(200).json({message:`<h1> Wlecome to Express </h1>`})
  } catch (error) {
    res.status(400).json({message:error})
  }
});

node_server.listen(port , ()=>console.log(`server started at port ${port}`));


module.exports =router;