const mongoose = require("mongoose");

mongoose.connect( `mongodb+srv://SivaKumar:siVaAtlas@sivakumar.yhfef3z.mongodb.net/bikeService?retryWrites=true&w=majority`,
{useNewUrlParser:true , useUnifiedTopology:true}
);