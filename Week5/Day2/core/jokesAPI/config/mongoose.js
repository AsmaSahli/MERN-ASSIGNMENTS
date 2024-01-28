const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1/jokes",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
 .then(()=>console.log("connected to database !"))
 .catch(err=>console.log(("somthing went wrong connecting to the database !",err)))