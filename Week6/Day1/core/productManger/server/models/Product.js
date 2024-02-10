const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"{PATH} is required"]
    },
    price:{
        type : Number,
        required: [true,"{PATH} is required"]
    },

    description:{
        type : String
    },

}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
