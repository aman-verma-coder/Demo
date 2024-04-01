const mongoose = require("mongoose");

const detail = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
    }
})

const Data = mongoose.model("Data", detail);

module.exports = Data;