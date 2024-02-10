const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
    CountryName: {
        type: String
    },
    CountryYear:{
        type : Number
    }
}, { timestamps: true });

const Country = mongoose.model("Country", CountrySchema);

module.exports = Country;
