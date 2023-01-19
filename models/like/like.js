const mongoose = require("mongoose");

const Like = mongoose.model(
    "Like",
    new mongoose.Schema({
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        picture: {
            type: String,
        },
        age: {
            type: String,
        },
    })
);

module.exports = Like;

