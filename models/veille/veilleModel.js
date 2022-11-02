import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const VeilleSchema = new Schema({
    stop: {
        type: Number,
    },
    start: {
        type: Number,
    }
})