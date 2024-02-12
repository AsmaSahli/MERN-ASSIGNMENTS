const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"{PATH} is required"]
    },
    content:{
        type : String,
        required: [true,"{PATH} is required"],
        minlength:[3,"{PATH} must be at least 3 characters"]
    },

    important:{
        type : Boolean,
        default: false
    },

}, { timestamps: true });

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
