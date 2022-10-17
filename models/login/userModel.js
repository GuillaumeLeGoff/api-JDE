import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        password: String
    })
);

module.exports = User;



