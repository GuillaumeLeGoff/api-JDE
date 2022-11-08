import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ModeSchema = new Schema({
    activeMode: {
        type: String,
    },
    
})