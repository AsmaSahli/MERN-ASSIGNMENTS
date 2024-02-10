const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    animalType: {
        type: String,
        required:[true,"{PATH} is required"],

    },
    image: {
        type: String,
    },
    name: {
        type: String,
        minLenght:[3,"{PATH} must have at least 3 characters"],
    },
    isSick: {
        type: Boolean,
        default: false,
    },
    numOfLegs: {
        type: Number,
        min:[1,"{PATH} must be valid"]
    }
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
