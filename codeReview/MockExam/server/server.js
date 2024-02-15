const express = require("express");
const app=express();
const cookieParser = require("cookie-parser");

const cors=require("cors");


app.use(express.json(express.urlencoded({extended: true})))

app.use(cors({
    origin: "http://localhost:3000",  
    credentials: true,
}));

app.use(cookieParser());

require("dotenv").config()
require("./config/mongoose")

const port=process.env.PORT

require("./routes/Pizza.routes")(app)
require("./routes/User.routes")(app)


app.listen(port,()=>console.log(`listening on port: ${port}`))
