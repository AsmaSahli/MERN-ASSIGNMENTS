const express = require("express");
const app=express();

const cors=require("cors");
app.use(cors());


app.use(express.json(express.urlencoded({extended: true})))

require("dotenv").config()
require("./config/mongoose.config")

const port=process.env.PORT

require("./routes/Pet.Routes")(app)




app.listen(port,()=>console.log(`listening on port: ${port}`))