import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TruckSchema = new Schema({
    id: {
        type: Number,
    },
    dockIndex: {
        type: Number,
    },
    plate: {
        type: String,
    },
    state: {
        type: Boolean,
    },
    flag: {
        type: Boolean,
        default: true,
    },
})