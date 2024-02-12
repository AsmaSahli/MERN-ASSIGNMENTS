const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    pizzaName: {
        type: String,
        required: [true,"Must select a pizza"]
    },
    size:{
        type : String,
        required: [true,"Must select a size"]
    },
    delivreyTime:{
        type : Date,
        required: [true,"{PATH} is required"]
    },
    isDelivered:{
        type : Boolean,
        default: false
    },

    notes:{
        type : String,
        maxlength:[25,"{PATH } cannot be over 25 characters"]

    },

}, { timestamps: true });

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
